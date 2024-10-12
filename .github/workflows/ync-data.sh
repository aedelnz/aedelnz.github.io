#!/bin/bash

# 定义API URL和本地文件路径
API_URL="https://gitlab.com/c0nfigway/share/-/raw/hotfix/encryptcfg?ref_type=heads"
LOCAL_FILE="data.json"

# 使用curl获取数据
# 注意：这里假设API不需要认证，如果需要认证，可能需要添加 -u "username:password" 或使用其他认证方式
DATA=$(curl -s "$API_URL")

# 检查curl命令是否成功
if [ $? -ne 0 ]; then
    echo "Error fetching data from API"
    exit 1
fi

# 将获取的数据写入本地文件
echo "$DATA" > "$LOCAL_FILE"

# 输出结果，表示脚本执行成功
echo "Data has been successfully synced to $LOCAL_FILE"
