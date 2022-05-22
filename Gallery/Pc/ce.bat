@echo off

set fn=C:\Users\admin\Desktop\seven7\Hexo-butterfly-demo\source\Gallery\Pe\index.md

for /f "tokens=*" %%i in ('dir/s/b/ad') do copy %fn% "%%i"

pause