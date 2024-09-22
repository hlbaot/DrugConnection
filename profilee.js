// Lấy các phần tử cần thiết
const editProfileBtn = document.querySelector('.header_edit-profile');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal_close-btn');
const saveModalBtn = document.querySelector('.modal_save-btn');
const fileInput = document.getElementById('file');
const profileEditUpload = document.querySelector('.profile_edit-upload');
const changePhotoBtn = document.querySelector('.change_photo-btn');
const profileAvatarImg = document.querySelector('.profile_avatar-img');
const nameInput = document.querySelector('.name-edit_input');
const bioInput = document.querySelector('.bio-edit_input');
const createButton = document.getElementById('create');
const layer1 = document.querySelector('.layer1');
const modal1 = document.querySelector('.modal1');
const closeButton = document.getElementById('close-button');
const upImgContainer = document.querySelector('.up-img');
const uploadButton = document.getElementById('upload-button');

let hasChanges = false;
let originalOverflow = document.body.style.overflow;

// Thêm sự kiện click vào nút edit profile
editProfileBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Thêm sự kiện click vào nút đóng
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  resetModal();
});

// Thêm sự kiện click vào lớp modal
modal.addEventListener('click', (e) => {
  if (!e.target.closest('.modal_container')) {
    modal.style.display = 'none';
    resetModal();
  }
});

// Thêm sự kiện change vào input file
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const imageData = reader.result;
    const img = document.createElement('img');
    img.src = imageData;
    profileEditUpload.innerHTML = '';
    profileEditUpload.appendChild(img);
    profileAvatarImg.src = imageData;
  };
  reader.readAsDataURL(file);
  hasChanges = true;
  saveModalBtn.style.display = 'block';
});

// Thêm sự kiện click vào nút change photo
changePhotoBtn.addEventListener('click', () => {
  fileInput.click();
});

// Thêm sự kiện transitionend vào lớp profileEditUpload
profileEditUpload.addEventListener('transitionend', () => {
  profileEditUpload.style.height = 'auto';
});

profileEditUpload.style.height = '0px';
profileEditUpload.style.overflow = 'hidden';
profileEditUpload.style.transition = 'height 0.5s';

fileInput.addEventListener('change', () => {
  profileEditUpload.style.height = '100px'; // adjust the height to your liking
});

// Thêm sự kiện input vào các input field
nameInput.addEventListener('input', () => {
  hasChanges = true;
  saveModalBtn.style.display = 'block';
});

bioInput.addEventListener('input', () => {
  hasChanges = true;
  saveModalBtn.style.display = 'block';
});

/// Thêm sự kiện click cho nút "Create"
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
  upImgContainer.innerHTML = '';
  upImgContainer.appendChild(img);
  uploadButton.style.display = 'block';
});

function resetModal() {
  hasChanges = false;
  saveModalBtn.style.display = 'none';
  nameInput.value = '';
  bioInput.value = '';
  fileInput.value = '';
  profileEditUpload.innerHTML = '';
  profileAvatarImg.src = '';
  profileEditUpload.style.height = '0px';
}

//follow / following
function toggleFollow(element) {
  const textElement = element.querySelector('#follow-text');
  if (textElement.textContent === 'Follow') {
    textElement.textContent = 'Following';
  } else {
    textElement.textContent = 'Follow';
  }
}


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
