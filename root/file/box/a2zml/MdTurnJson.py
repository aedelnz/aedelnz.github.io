import json
import re

# 解析Markdown内容
def parse_markdown_to_json(markdown):
    data = []
    current_main_title = None
    current_category = None
    
    lines = markdown.split('\n')
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # 检测主标题 (如 # free-for.dev)
        main_title_match = re.match(r'^#\s+(.+)$', line)
        if main_title_match:
            current_main_title = main_title_match.group(1)
            data.append({
                "title": current_main_title,
                "data": []
            })
            current_category = None
            continue
            
        # 检测分类标题 (如 ## Cloud management solutions)
        category_match = re.match(r'^\#\#\s+(.+)$', line)
        if category_match:
            current_category = category_match.group(1)
            if data and current_main_title:
                # 找到当前主标题对应的条目
                for item in data:
                    if item["title"] == current_main_title:
                        item["data"].append({
                            "title": current_category,
                            "data": []
                        })
            continue
            
        # 更灵活的正则表达式，允许不同的分隔符(空格、-、—等)
        resource_match = re.match(r'^\s*\*\s+\[([^\]]+)\]\(([^)]+)\)\s*[-—]\s*(.+)$', line)
        if resource_match and data and current_main_title:
            title = resource_match.group(1)
            href = resource_match.group(2)
            description = resource_match.group(3)
            
            # 找到当前主标题和分类对应的条目
            for item in data:
                if item["title"] == current_main_title:
                    for category in item["data"]:
                        if category["title"] == current_category:
                            category["data"].append({
                                "title": title,
                                "description": description,
                                "href": href
                            })
            continue
            
    return data


def main():
    # 读取README.md文件
    with open('README.md', 'r', encoding='utf-8') as f:
        readme_content = f.read()
    
    # 生成index.json格式的数据
    index_data = parse_markdown_to_json(readme_content)
    
    # 将结果保存为JSON文件
    with open('free-for.dev', 'w', encoding='utf-8') as f:
        json.dump(index_data, f, indent=2)
    print("Markdown文档已成功转换为json数据")


if __name__ == "__main__":
    main()
