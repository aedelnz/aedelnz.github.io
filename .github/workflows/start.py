import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64
import os
import re

# AES解密函数
def decrypt_aes(encrypted_data_b64, key, iv):
    encrypted_data = base64.b64decode(encrypted_data_b64)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    try:
        decrypted_data = unpad(cipher.decrypt(encrypted_data), AES.block_size)
        return decrypted_data
    except ValueError as e:
        print("解密失败:", e)
        return None

# 下载并解密数据
def download_and_decrypt(url, key, iv, output_file_name):
    response = requests.get(url)
    if response.status_code == 200:
        encrypted_data_b64 = response.content
        decrypted_data = decrypt_aes(encrypted_data_b64, key, iv)
        if decrypted_data:
            # 将解密后的数据编码为UTF-8字节
            decrypted_data_bytes = decrypted_data.decode('utf-8').replace('V2CROSS.COM', 'v2.jixiejidiguan.eu.org').encode('utf-8')
            encoded_bytes = base64.b64encode(decrypted_data_bytes)
            # 保存解密后的数据到指定的文件名
            with open(output_file_name, 'wb') as output_file:
                output_file.write(encoded_bytes)
            print(f"解密成功，写入的解密数据: {output_file_name}")
        else:
            print("解密失败")
    else:
        print(f"下载失败，状态码: {response.status_code}")

# 密钥和初始化向量（IV）必须是32字节（AES256）
key = b'8YfiQ8wrkziZ5YFa'   # 请替换为你的密钥
iv = b'8YfiQ8wrkziZ5YFa'   # 请替换为你的IV

# 你要下载的地址列表
urls = [
    'https://gitlab.com/c0nfigway/share/-/raw/hotfix/encryptcfg?ref_type=heads',
    'https://gitlab.com/c0nfigway/share/-/raw/hotfix/encryptcfg5?ref_type=heads',
    'https://gitlab.com/c0nfigway/share/-/raw/hotfix/encryptcfg_zh?ref_type=heads',
    # 添加更多地址
]

# 为每个URL指定一个自定义的输出文件名
output_file_names = [
    'Shadowrocket',
    'Shadowrockets',
    'Shadowrocketss',
    # 添加更多文件名
]

# 确保输出目录存在
output_dir = '/'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# 遍历地址列表并下载解密
for url, output_file_name in zip(urls, output_file_names):
    # 构造完整的输出文件路径
    full_output_path = os.path.join(output_dir, output_file_name)
    download_and_decrypt(url, key, iv, full_output_path)
