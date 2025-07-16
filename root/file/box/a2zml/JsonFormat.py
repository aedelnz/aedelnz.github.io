#!/usr/bin/env python3
import json
import argparse
import os
import sys

# 使用示例：python JsonFormat.py -f 文件.json

def format_json_file(input_path, output_path=None, overwrite=False):
    """
    格式化JSON文件
    :param input_path: 输入文件路径
    :param output_path: 输出文件路径(如果为None且overwrite为False，则报错)
    :param overwrite: 是否覆盖原文件
    """
    # 验证输入文件
    if not os.path.isfile(input_path):
        print(f"错误: 输入文件不存在 - {input_path}", file=sys.stderr)
        sys.exit(1)
    
    # 确定输出路径
    if overwrite:
        output_path = input_path
    elif output_path is None:
        print("错误: 必须指定输出文件路径或使用--overwrite选项", file=sys.stderr)
        sys.exit(1)
    
    # 读取并格式化JSON
    try:
        with open(input_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # 这里可以添加自定义的JSON处理逻辑
        # 例如: data = process_data(data)
        
        # 写入输出文件
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        
        print(f"成功: JSON文件已格式化并保存到 {output_path}")
    
    except json.JSONDecodeError as e:
        print(f"错误: 无效的JSON格式 - {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"错误: 处理文件时发生异常 - {e}", file=sys.stderr)
        sys.exit(1)

def main():
    # 设置命令行参数解析
    parser = argparse.ArgumentParser(description='JSON文件格式化工具')
    parser.add_argument('input', help='输入JSON文件路径')
    parser.add_argument('-o', '--output', help='输出JSON文件路径(默认覆盖原文件)')
    parser.add_argument('-f', '--overwrite', action='store_true', 
                        help='覆盖原文件(不指定输出路径时自动覆盖)')
    
    args = parser.parse_args()
    
    # 处理参数逻辑
    if args.overwrite and args.output:
        print("警告: 同时指定了--overwrite和-o参数，将优先使用--overwrite(覆盖原文件)", file=sys.stderr)
        args.output = None
    
    # 调用格式化函数
    format_json_file(
        input_path=args.input,
        output_path=args.output,
        overwrite=args.overwrite
    )

if __name__ == '__main__':
    main()
