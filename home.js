// Đã đọc thông báo
document.getElementById('dot-red').addEventListener('click', function () {
  var dotRed = this.querySelector('.dot-red');
  dotRed.classList.add('hidden');
});

// Đề xuất follow
const followButtons = document.querySelectorAll('.follow');

followButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.textContent = 'Followed';
    setTimeout(function () {
      button.parentNode.classList.add('hide');
      setTimeout(function () {
        button.parentNode.remove();
      }, 1000);
    }, 1000);
  });
});

// Bắt đầu modal
// Thêm sự kiện click cho nút "Create"
document.getElementById('create').addEventListener('click', function () {
  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;
  const modalTop = scrollTop + (window.innerHeight / 2);
  const modalLeft = scrollLeft + (window.innerWidth / 2);

  document.querySelector('.modal1').style.top = `${modalTop}px`;
  document.querySelector('.modal1').style.left = `${modalLeft}px`;

  document.querySelector('.layer1').classList.add('active');
  document.querySelector('.layer1').style.display = 'block';
  document.querySelector('.modal1').classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Thêm sự kiện click cho nút "Close"
document.getElementById('close-button').addEventListener('click', function () {
  document.querySelector('.layer1').classList.remove('active');
  document.querySelector('.layer1').style.display = 'none';
  document.querySelector('.modal1').classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Tùy chọn: Đóng modal khi click vào layer1
document.querySelector('.layer1').addEventListener('click', function () {
  document.querySelector('.layer1').classList.remove('active');
  document.querySelector('.layer1').style.display = 'none';
  document.querySelector('.modal1').classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Đăng ảnh
const fileInput = document.getElementById('file');
const upImgDiv = document.querySelector('.up-img');
const uploadButton = document.getElementById('upload-button');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = document.createElement('img');
    img.src = event.target.result;
    upImgDiv.innerHTML = '';
    upImgDiv.appendChild(img);
    uploadButton.style.display = 'block';
  };

  reader.readAsDataURL(file);
});

// Đang mở modal không cuộn bài viết
document.getElementById('option-post').addEventListener('click', function() {
  document.querySelector('.layer1').style.display = 'block';
  document.querySelector('.modal2').style.display = 'block';
});

document.querySelector('.cancle').addEventListener('click', function() {
  document.querySelector('.layer1').style.display = 'none';
  document.querySelector('.modal2').style.display = 'none';
});

document.querySelector('.layer1').addEventListener('click', function() {
  document.querySelector('.layer1').style.display = 'none';
  document.querySelector('.modal2').style.display = 'none';
});

// Open Notification
const notifications = document.querySelector('.notifications');
const notificationLink = document.querySelector('#dot-red');

notificationLink.addEventListener('click', (event) => {
    event.preventDefault(); // Ngăn hành vi mặc định của liên kết
    notifications.classList.toggle('show');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.notifications, #dot-red li')) {
        notifications.classList.remove('show');
    }
});


// Kiểm tra bình luận và hiển thị alert nếu trống
const addCommentButton = document.getElementById('addComment');
const commentTextarea = document.getElementById('commentTextarea');

addCommentButton.addEventListener('click', () => {
  const commentValue = commentTextarea.value.trim(); // Lấy giá trị và loại bỏ khoảng trắng thừa

  // Kiểm tra nếu giá trị bình luận trống
  if (commentValue === '') {
    alert('Vui lòng nhập bình luận'); // Hiển thị thông báo cho người dùng
  }
  // xóa nội dung bên trong sau khi người dùng nhập bình luận
  commentTextarea.value = '';
});
// tym comment
const heartButton = document.getElementById('heart-button');
let isLiked = false; // Set to false initially

heartButton.addEventListener('click', () => {
    isLiked = !isLiked;
    if (isLiked) {
        heartButton.classList.add('liked');
    } else {
        heartButton.classList.remove('liked');
    }
    heartButton.blur(); // Remove focus after click
});
