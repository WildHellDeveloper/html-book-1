# Thư viện Trường THCS Thuận An – Góc giới thiệu sách

Website tĩnh (HTML/CSS/JS thuần) giới thiệu các cuốn sách của thư viện trường. Không cần cài đặt hay build – mở `index.html` là chạy, đưa lên GitHub Pages là dùng được ngay.

## Cấu trúc

```
index.html                                   ← Trang chủ thư viện (danh sách sách)
toi-tai-gioi-ban-cung-the/index.html         ← Tôi tài giỏi, bạn cũng thế!
bac-ho-kinh-yeu/index.html                   ← Bác Hồ kính yêu
tinh-yeu-cua-me/index.html                   ← Tình yêu bất tận của mẹ
giao-duc-bien-dao/index.html                 ← Giáo dục về biển – đảo Việt Nam
hoang-sa-truong-sa-khat-vong-hoa-binh/index.html ← Hoàng Sa, Trường Sa – Khát vọng hòa bình
lich-su-viet-nam-bang-tranh-nuoc-co-viet/index.html ← Lịch sử Việt Nam bằng tranh
assets/css/style.css                         ← CSS dùng chung cho mọi trang
assets/js/main.js                            ← Hiệu ứng cuộn + menu toàn trang
assets/fonts/                                ← Font tự host (có tiếng Việt), chạy được khi offline
assets/books/<tên-sách>/                     ← Ảnh bìa, ảnh tác giả, nội dung gốc của từng cuốn
```

## Đưa lên GitHub Pages

1. Push toàn bộ thư mục lên một repo GitHub.
2. Vào **Settings → Pages → Build and deployment**, chọn *Deploy from a branch*, branch `main`, thư mục `/ (root)`.
3. Sau khoảng 1 phút, trang có tại `https://<tên-user>.github.io/<tên-repo>/`.

## Tuỳ chỉnh nhanh

- **Màu của từng cuốn sách:** mỗi trang có một thẻ `<style>` ở đầu file ghi đè các biến màu (`--blue`, `--yellow`, `--orange`, `--cream`…). Màu mặc định nằm trong `:root` của `assets/css/style.css`.
- **Ảnh bìa:** sửa đường dẫn trong dòng `.book .front{background-image:url(...)}` ở thẻ `<style>` của trang đó, và thẻ `og:image`.
- **Tỉ lệ bìa sách 3D:** biến `--book-ar` (chiều rộng/chiều cao ảnh bìa) trong thẻ `<style>` của trang.
- **Chữ nền lớn ở banner:** biến `--bgr` là độ dài dòng chữ dài nhất (tính theo em). Đổi chữ thì tăng/giảm số này để chữ vừa khung.
- **Menu & footer:** nằm trong từng file HTML (khối `<header class="site-header">`, `<nav class="site-menu">`, `<footer class="site-footer">`). Khi thêm sách mới, nhớ thêm một mục vào menu của tất cả các trang và một thẻ sách ở trang chủ.
- **Ảnh tác giả (Tôi tài giỏi):** `assets/books/toi-tai-gioi-ban-cung-the/Adam-Khoo.webp`; nếu ảnh lỗi, khung polaroid hiện chữ “AK”.

## Nguồn thông tin

- Nội dung giới thiệu: các file trong `assets/books/<tên-sách>/` do thư viện soạn.
- Tác giả Adam Khoo: [Wikipedia](https://en.wikipedia.org/wiki/Adam_Khoo), [AKLTG](https://www.akltg.com/leaders/adam-khoo/).
