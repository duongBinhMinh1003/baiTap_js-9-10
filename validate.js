// function kiemTrung(dsnv,id){
// var viTri = dsnv.findIndex(function(item){
//     return item.taiKhoan == id;
// });
// if(viTri != -1){
//     document.getElementById("tbTKNV").innerText="Đã có user sử dụng"
//     return false;
// }
// else{
//     document.getElementById("tbTKNV").innerText="";
//     return true;
// }
// }


// function kiemTraDoDai(value , idErr , min , max){
//     var length = value.length;
//     if(min <= length && length <= max){
//         document.getElementById(idErr).innerText=""
//         return true;
//     }
//     else{
//         document.getElementById(idErr).innerText=`Độ dài phải từ ${min} đến ${max} kí tự`;
//         return false;
//     }
// }
// function kiemTraDoDaiLuong(value , idErr , min , max){
//     var value;
//     if(min <= value && value <= max){
//         document.getElementById(idErr).innerText=""
//         return true;
//     }
//     else{
//         document.getElementById(idErr).innerText=`Lương từ ${min.toLocaleString()} đến ${max.toLocaleString()} VNĐ `;
//         return false;
//     }
// }
// function kiemTraDoDaiH(value , idErr , min , max){
//     var value;
//     if(min <= value && value <= max){
//         document.getElementById(idErr).innerText=""
//         return true;
//     }
//     else{
//         document.getElementById(idErr).innerText=`Số giờ làm trong tháng từ ${min} giờ-${max} giờ `;
//         return false;
//     }
// }
// function kiemTraName(value , idErr){
    
//     if(/^[a-zA-Z ]+$/.test(value)){
//     document.getElementById(idErr).innerText="";
//     return true;
//     }
//     else{
//         document.getElementById(idErr).innerText="Không đc chứa kí tự số";
//         return false;
//     }
// }
// function kiemEmail(email){
//     const re =
//   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(re.test(email)){
//     document.getElementById("tbEmail").innerText="";
//     return true;
//   }
//   document.getElementById("tbEmail").innerText="Email không hợp lệ";
//   return false;
//   }
//   function kiemTraPassword(password){
//     var kiemTraPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10}$)/;
//    if(kiemTraPass.test(password)){
//     document.getElementById("tbMatKhau").innerText="";
//     return true
//    }
//    else{
//     document.getElementById("tbMatKhau").innerText=" Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
//     return false;
//    }
//   }
//   function kiemTraDay(value) {
//     var dayPattern = /^(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][0-9]|3[01])(\/|-)(19|20)\d{2}$/;
  
//     if (dayPattern.test(value)) {
//       document.getElementById("tbNgay").innerText = "";
//       return true;
//     } else {
//       document.getElementById("tbNgay").innerText = "Theo định dạng mm/dd/yyyy";
//       return false;
//     }
//   }
//   function kiemTraChucVu(value){
//     var _chucVu = document.getElementById("chucvu").value;
//     var hopLe =["Trưởng phòng" , "Sếp" ,"Nhân viên"];
//     if(hopLe.indexOf(_chucVu) === -1){
//         document.getElementById("tbChucVu").innerText="Chức vụ phải chọn chức vụ hợp lệ";
//         return false;
//     }
//     else{
//         document.getElementById("tbChucVu").innerText="";
//         return true;
//     }
//   }
  
  
  