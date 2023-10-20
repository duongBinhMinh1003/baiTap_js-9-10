function renderDsnv(dsnv){
var content = "";
for(var i = 0 ; i < dsnv.length ; i++){
    var data = dsnv[i];
    var trString = `<tr>
                        <td>${data.taiKhoan}</td>
                        <td>${data.name}</td>
                        <td>${data.email}</td>
                        <td>${data.ngay}</td>
                        <td>${data.chucVu}</td>
                        <td>${data.tienLuong().toLocaleString()} VNĐ</td>
                        <td>${data.xepLoai()}</td>
                        <td>
                        <button onclick="xoaNv('${data.taiKhoan}')" class="btn btn-danger">Xoá</button> 
                        <button data-toggle="modal" data-target="#myModal" onclick="suaNv('${data.taiKhoan}')" class="btn btn-warning">Sửa</button>                      
                        </td>
                        
    
    </tr>`
    content = content + trString ;
}
document.getElementById("tableDanhSach").innerHTML=content;
}