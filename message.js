const typeBarText = document.querySelector('.type_bar-text');
const sendBtn = document.querySelector('.send_btn');
const typeBarOption = document.querySelector('.type_bar-option');
const fileInput = document.getElementById('file');

typeBarText.addEventListener('input', () => {
  if (typeBarText.value.trim() !== '') {
    sendBtn.style.display = 'flex';
    typeBarOption.style.display = 'none';
  } else {
    sendBtn.style.display = 'none';
    typeBarOption.style.display = 'flex';
  }
});
// Select all reply buttons and the type_bar-reply section
const replyBtns = document.querySelectorAll('.reply-btn');
const typeBarReply = document.querySelector('.type_bar-reply');

// Add an event listener to each reply button
replyBtns.forEach(replyBtn => {
  replyBtn.addEventListener('click', () => {
    // Toggle the visibility of the type_bar-reply section
    typeBarReply.classList.toggle('visible');
  });
});

// Select the 'x' button in the type_bar-reply section
const closeReply = typeBarReply.querySelector('.bx-x');

// Add an event listener to the 'x' button
closeReply.addEventListener('click', () => {
  // Hide the type_bar-reply section
  typeBarReply.classList.remove('visible');
});
const moreClick = document.querySelector('.block_btn');
const cardWrap = document.querySelector('.card_wrap');
const cancelButton1 = document.querySelector('.declineButton');
const cancelButton2 = document.querySelector('.acceptButton');

moreClick.addEventListener('click', () => {
  cardWrap.classList.add('show');
});

cancelButton1.addEventListener('click', () => {
  cardWrap.classList.remove('show');
});
cancelButton2.addEventListener('click', () => {
  cardWrap.classList.remove('show');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.cardp') && !event.target.closest('.more_click')) {
    cardWrap.classList.remove('show');
  }
});
// Get the elements
const acceptButton = document.querySelector('.acceptButton');
const cardBlocked = document.querySelector('.card_blocked');
const unblockButton1 = document.querySelector('.card_blocked-button.secondary');
const unblockButton2 = document.querySelector('.exit-button');


// Add event listeners
acceptButton.addEventListener('click', () => {
  cardBlocked.style.display = 'block';
});

unblockButton1.addEventListener('click', () => {
  cardBlocked.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() {
  const deleteMes = document.querySelector('.delete_mes');
  const deleteMesWrap = document.querySelector('.delete_mes-wrap');
  
  deleteMes.addEventListener('click', function() {
    deleteMesWrap.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.delete_mes-wrap') && !event.target.classList.contains('delete_mes')) {
      deleteMesWrap.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const deleteMes = document.querySelectorAll('.delete_mes');
  const contentOption = document.querySelectorAll('.content_option');

  deleteMes.forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.stopPropagation(); // prevent event from bubbling up to document
      const parent = element.parentNode.parentNode; // get the parent ul.content_option
      parent.classList.toggle('show');
    });
  });

  document.addEventListener('click', function(event) {
    contentOption.forEach(function(element) {
      element.classList.remove('show');
    });
  });
});

// Lấy phần tử nút Block
const blockButton = document.querySelector('.acceptButton');

// Lấy phần tử type_bar-wrap
const typeBarWrap = document.querySelector('.type_bar-wrap');

// Thêm sự kiện click vào nút Block
blockButton.addEventListener('click', function() {
  // Khi nút Block được click, ẩn phần tử type_bar-wrap
  typeBarWrap.style.display = 'none';
});
// Lấy phần tử nút Unblock
const unblockButton = document.querySelector('.card_blocked-button.secondary');

// Lấy phần tử type_bar-wrap
// const typeBarWrap = document.querySelector('.type_bar-wrap');

// Thêm sự kiện click vào nút Unblock
unblockButton.addEventListener('click', function() {
  // Khi nút Unblock được click, hiển thị lại phần tử type_bar-wrap
  typeBarWrap.style.display = 'flex';
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

// Thêm sự kiện click cho nút "Create"
document.getElementById('create').addEventListener('click', function () {
  document.querySelector('.layer1').classList.add('active');
  document.querySelector('.modal1').classList.add('active');
  document.body.style.overflow = 'hidden';
});

// Thêm sự kiện click cho nút "Close"
document.getElementById('close-button').addEventListener('click', function () {
  document.querySelector('.layer1').classList.remove('active');
  document.querySelector('.modal1').classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Tùy chọn: Đóng modal khi click vào layer1
document.querySelector('.layer1').addEventListener('click', function (e) {
  if (e.target === this) {
    document.querySelector('.layer1').classList.remove('active');
    document.querySelector('.modal1').classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Thêm sự kiện change vào input file
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file);
  const upImgContainer = document.querySelector('.up-img');
  upImgContainer.innerHTML = '';
  upImgContainer.appendChild(img);
  const uploadButton = document.getElementById('upload-button');
  uploadButton.style.display = 'block';
});