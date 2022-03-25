// Bài tập 1
document.getElementById("sap-xep").onclick = function () {
  var st1 = document.getElementById("st1").value;
  var st2 = document.getElementById("st2").value;
  var st3 = document.getElementById("st3").value;
  var chuoiNhap = [st1, st2, st3];
  chuoiTrave = chuoiNhap.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("ket-qua-sap-xep").innerHTML =
    "<h5 class='text-success'>Kết quả được sắp xếp lại là: </h5><h4 class='text-danger'>" +
    chuoiTrave.toString() +
    "</h4>";
};

// Bài tập 2
document.getElementById("gui-loi-chao").onclick = function () {
  var user = document.getElementById("nhan-dien").value;
  if (user == "B") {
    document.getElementById("chao").innerHTML =
      "<p class='alert alert-warning'>Nhớ luôn Ctrl + Shift + N nha ông nội!!!</p>";
  } else if (user == "M") {
    document.getElementById("chao").innerHTML =
      "<p class='alert alert-info'>Ổng xóa hết lịch sử rồi, có vô cũng không tìm thấy gì đâu!!!</p>";
  } else if (user == "A") {
    document.getElementById("chao").innerHTML =
      "<p class='alert alert-success'>Lẹ lên, AE đang chờ</p>";
  } else {
    document.getElementById("chao").innerHTML =
      "<p class='alert alert-danger'>Tắt máy nhanh, coi chừng sau này ăn hại như anh con đó!</p>";
  }
};

//Bài tập 3
document.getElementById("xem-xet").onclick = function () {
  var s1 = document.getElementById("s1").value;
  var s2 = document.getElementById("s2").value;
  var s3 = document.getElementById("s3").value;
  var array = [s1, s2, s3];
  var sc = [];
  var sl = [];
  var ktx = [];
  var len = array.length;
  for (var i = 0; i < len; i++) {
    console.log(Math.abs(Number(array[0]) % Math.floor(Number(array[0]))));
    if (Math.abs(Number(array[i]) % Math.floor(Number(array[i]))) > 0) {
      ktx.push(array[i]);
    } else if (Number(array[i]) % 2 == 0) {
      sc.push(array[i]);
    } else {
      sl.push(array[i]);
    }
  }
  var kqsc =
    sc.length > 0
      ? "Số lượng số chẵn là: " + sc.length + "___ bao gồm số : " + sc
      : "";
  var kqsl =
    sl.length > 0
      ? "Số lượng số lẻ là: " + sl.length + "___ bao gồm số : " + sl
      : "";
  var kqktx =
    ktx.length > 0
      ? "Số lượng số thập phân không thể xét chẵn lẻ là: " +
        ktx.length +
        "___ bao gồm số : " +
        ktx
      : "";
  document.getElementById("xuat-ket-qua").innerHTML =
    "<p class='text-success'>" +
    kqsc +
    "</p>" +
    "<p class='text-info'>" +
    kqsl +
    "</p>" +
    "<p class='text-danger'>" +
    kqktx +
    "</p>";
};

// Bài tập 4
document.getElementById("phan-loai").onclick = function () {
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  var chuoiNhan = [c1, c2, c3];
  chuoiTra = chuoiNhan.sort(function (a, b) {
    return a - b;
  });
  if (
    Number(chuoiTra[0]) <= 0 ||
    Number(chuoiTra[1]) <= 0 ||
    Number(chuoiTra[2]) <= 0
  ) {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<p class='alert alert-danger'>Số đo cạnh bắt buộc là số dương lớn hơn 0</p>";
  } else if (
    Number(chuoiTra[0]) == Number(chuoiTra[1]) &&
    Number(chuoiTra[0]) == Number(chuoiTra[2])
  ) {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<span class='text-success'>Đây là </span><span class='text-danger'>tam giác đều</span>";
  } else if (
    Number(chuoiTra[2]) == Number(chuoiTra[0]) + Number(chuoiTra[1])
  ) {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<p class='alert alert-danger'>Đây không phải là 1 tam giác mà là 1 đường thẳng</p>";
  } else if (
    Number(chuoiTra[0]) == Number(chuoiTra[1]) &&
    Number(chuoiTra[0]) != Number(chuoiTra[2]) &&
    Number(chuoiTra[2]) != 2 * Number(chuoiTra[0])
  ) {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<span class='text-success'>Đây là </span><span class='text-danger'>tam giác cân</span>";
  } else if (
    Math.pow(Number(chuoiTra[2]), 2) ==
    Math.pow(Number(chuoiTra[1]), 2) + Math.pow(Number(chuoiTra[0]), 2)
  ) {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<span class='text-success'>Đây là </span><span class='text-danger'>tam giác vuông</span>";
  } else {
    document.getElementById("ket-qua-phan-loai").innerHTML =
      "<span class='text-success'>Đây là </span><span class='text-danger'>tam giác thường</span>";
  }
};

// Bài tập 5
document.getElementById("tra-cuu").onclick = function () {
  var date = document.getElementById("date").valueAsDate;
  if (date != null) {
    var d = date.getDate();
    var dtt = d + 1;
    var dtd = d - 1;
    var m = date.getMonth();
    var mht = date.getMonth() + 1;
    var y = date.getFullYear();
    var datett = new Date(y, m, dtt);
    var datetd = new Date(y, m, dtd);
    var nht = ("0" + d).slice(-2) + "/" + ("0" + mht).slice(-2) + "/" + y;
    var ntt =
      ("0" + datett.getDate()).slice(-2) +
      "/" +
      ("0" + (datett.getMonth() + 1)).slice(-2) +
      "/" +
      datett.getFullYear();
    var ntd =
      ("0" + datetd.getDate()).slice(-2) +
      "/" +
      ("0" + (datetd.getMonth() + 1)).slice(-2) +
      "/" +
      datetd.getFullYear();
    var n = datett - datetd;
    console.log(n);
    document.getElementById("ket-qua-tra-cuu").innerHTML =
      "<p><span class='text-success'>Ngày tiếp theo của ngày </span>" +
      "<span class='text-info'><b><u>" +
      nht +
      "</u></b></span><span class='text-success'> là: </span><span class='text-danger'><b><u>" +
      ntt +
      "</b></u></span></p>" +
      "<p><span class='text-success'>Ngày trước đó của ngày </span>" +
      "<span class='text-info'><b><u>" +
      nht +
      "</u></b></span><span class='text-success'> là: </span><span class='text-danger'><b><u>" +
      ntd +
      "</b></u></span></p>";
  } else {
    document.getElementById("ket-qua-tra-cuu").innerHTML =
      "<p class='alert alert-danger'>Ngày bạn nhập không tồn tại</p>";
  }
};

// Bài tập 6
document.getElementById("dem-ngay").onclick = function () {
  var mm = document.getElementById("month").valueAsDate;
  var dtd = mm.getDate() - 1;
  var mmtt = mm.getMonth() + 1;
  var y = mm.getFullYear();
  var mtd = new Date(y, mmtt, dtd);
  var dcc = mtd.getDate();
  var sn = dcc;
  document.getElementById("ket-qua-dem-ngay").innerHTML =
    "<p><span class='text-success'>Số ngày trong </span>" +
    "<span class='text-info'><b><u>tháng " +
    ("0" + mmtt).slice(-2) +
    " năm " +
    y +
    "</u></b></span><span class='text-success'> là: </span><span class='text-danger'><b><u>" +
    sn +
    " ngày</b></u></span></p>";
};

// Bài tập 7
document.getElementById("chuyen-so").onclick = function () {
  var so0 = document.getElementById("so").value;
  var so = Math.abs(so0);
  var check = so - Math.floor(so);
  if (so <= 999 && check == 0) {
    var soDv = so % 10;
    var soHc = ((so - soDv) % 100) / 10;
    var soHt = (so - soHc * 10 - soDv) / 100;
    var tapSo = [soHt, soHc, soDv];
    var len = tapSo.length;
    var tapChu = [];
    var tapNentang = [
      "không",
      "một",
      "hai",
      "ba",
      "bốn",
      "năm",
      "sáu",
      "bảy",
      "tám",
      "chín",
    ];
    var tapChu = [];
    var len = tapSo.length;
    for (var i = 0; i < len; i++) {
      console.log(tapNentang[tapSo[i]]);
      tapChu.push(tapNentang[tapSo[i]]);
    }
    tapChu[0] != "không"
      ? (tapChu[0] = tapChu[0] + " trăm ")
      : (tapChu[0] = "");
    if (tapChu[1] != "không" && tapChu[1] != "một") {
      tapChu[1] = tapChu[1] + " mươi ";
    } else if (tapChu[1] == "một") {
      tapChu[1] = "mười ";
    } else if (
      tapChu[0] != "không" &&
      tapChu[0] != "" &&
      tapChu[1] == "không" &&
      tapChu[2] != "không"
    ) {
      tapChu[1] = "linh ";
    } else {
      tapChu[1] = "";
    }
    if (
      tapChu[1] != "không" &&
      tapChu[1] != "mười " &&
      tapChu[1] != "" &&
      tapChu[1] != "linh " &&
      tapChu[2] == "một"
    ) {
      tapChu[2] = "mốt";
    } else if (
      tapChu[1] != "không" &&
      tapChu[1] != "" &&
      tapChu[1] != "linh " &&
      tapChu[2] == "năm"
    ) {
      tapChu[2] = "lăm";
    } else if (tapChu[2] == "không") {
      tapChu[2] = "";
    } else {
      tapChu[2] = tapChu[2];
    }
    var kqd =
      tapChu.join("").charAt(0).toUpperCase() + tapChu.join("").slice(1);
    var kqa =
      ("âm " + tapChu.join("")).charAt(0).toUpperCase() +
      ("âm " + tapChu.join("")).slice(1);
    if (so * so0 >= 0) {
      document.getElementById("ket-qua-chuyen-so").innerHTML =
        "<h5 class='text-success'>" + so0 + ": " + kqd + "</h5>";
    } else {
      document.getElementById("ket-qua-chuyen-so").innerHTML =
        "<h5 class='text-danger'>" + so0 + ": " + kqa + "</h5>";
    }
  } else {
    document.getElementById("ket-qua-chuyen-so").innerHTML =
      "<p class='alert alert-danger'>" +
      so0 +
      ": Không phải là 1 số nguyên có ít hơn 3 chữ số, xin vui lòng nhập số nguyên có ít hơn 4 chữ số</p>";
  }
};

//Bài tập 8
document.getElementById("do-khoang-cach").onclick = function () {
  var trg = document.getElementById("trg").value;
  var trgx = document.getElementById("trgx").value;
  var trgy = document.getElementById("trgy").value;
  var kc = [];
  var tsv = [];
  var vtmax = [];
  var vtmin = [];
  var vttb = [];
  for (i = 1; i < 4; i++) {
    var svi = document.getElementById("sv" + i).value;
    var svix = document.getElementById("sv" + i + "x").value;
    var sviy = document.getElementById("sv" + i + "y").value;
    kc.push(Math.sqrt(Math.pow(svix - trgx, 2) + Math.pow(sviy - trgy, 2)));
    tsv.push(svi);
  }
  var maxKc = Math.max.apply(Math, kc);
  var minKc = Math.min.apply(Math, kc);
  var lenmax = 0;
  var lenmin = 0;
  var lentb = 0;
  for (j = 0; j < 3; j++) {
    kc[j] == maxKc ? vtmax.push(j + 1) : vtmax.push("");
    kc[j] == minKc ? vtmin.push(j + 1) : vtmin.push("");
    kc[j] != maxKc && kc[j] != minKc ? vttb.push(j + 1) : vttb.push("");
    vtmax[j] != "" ? (lenmax = lenmax + 1) : (lenmax = lenmax);
    vtmin[j] != "" ? (lenmin = lenmin + 1) : (lenmin = lenmin);
    vttb[j] != "" ? (lentb = lentb + 1) : (lentb = lentb);
  }
  console.log(vtmax, lenmax);
  console.log(vtmin, lenmin);
  console.log(vttb, lentb);
  if (lenmax == 3) {
    document.getElementById("ket-qua-do").innerHTML =
      "<p class='alert alert-success'>Khoảng cách từ nhà đến trường của 3 bạn là như nhau và đều bằng " +
      kc[0].toFixed(2) +
      " km</p>";
  } else if (lenmax == 2) {
    vtminc = vtmin.join("") - 1;
    vtmaxc = [0, 1, 2];
    vtmaxc.splice(vtmaxc.indexOf(vtminc), 1);
    document.getElementById("ket-qua-do").innerHTML =
      "<div class='alert alert-success'><h5>Khoảng cách từ nhà đến trường " +
      trg +
      " của các bạn sinh viên lần lượt là: </h5>" +
      "<p>Có 2 bạn có nhà xa trường nhất gồm: <span class='text-danger'><b>" +
      tsv[vtmaxc[0]] +
      "</b></span> và <span class='text-danger'><b>" +
      tsv[vtmaxc[1]] +
      "</b></span> với khoảng cách đều là <span class='text-danger'><b>" +
      maxKc.toFixed(2) +
      " km</b></span></p>" +
      "<p>Bạn gần trường nhất: <span class='text-danger'><b>" +
      tsv[vtminc] +
      "</b></span> với khoảng cách là <span class='text-danger'><b>" +
      minKc.toFixed(2) +
      " km</b></span></p>";
  } else if (lenmin == 2) {
    vtmaxc = vtmax.join("") - 1;
    vtminc = [0, 1, 2];
    vtminc.splice(vtminc.indexOf(vtmaxc), 1);
    document.getElementById("ket-qua-do").innerHTML =
      "<div class='alert alert-success'><h5>Khoảng cách từ nhà đến trường " +
      trg +
      " của các bạn sinh viên lần lượt là: </h5>" +
      "<p>Bạn xa trường nhất: <span class='text-danger'><b>" +
      tsv[vtmaxc] +
      "</b></span> với khoảng cách là <span class='text-danger'><b>" +
      maxKc.toFixed(2) +
      " km</b></span></p>" +
      "<p>Có 2 bạn có nhà gần trường nhất gồm: <span class='text-danger'><b>" +
      tsv[vtminc[0]] +
      "</b></span> và <span class='text-danger'><b>" +
      tsv[vtminc[1]] +
      "</b></span> với khoảng cách đều là <span class='text-danger'><b>" +
      minKc.toFixed(2) +
      " km</b></span></p>";
  } else {
    var vtmaxc = vtmax.join("") - 1;
    var vtminc = vtmin.join("") - 1;
    var vttbc = vttb.join("") - 1;
    document.getElementById("ket-qua-do").innerHTML =
      "<div class='alert alert-success'><h5>Khoảng cách từ nhà đến trường " +
      trg +
      " của các bạn sinh viên lần lượt là: </h5>" +
      "<p>Bạn xa trường nhất: <span class='text-danger'><b>" +
      tsv[vtmaxc] +
      "</b></span> với khoảng cách là <span class='text-danger'><b>" +
      maxKc.toFixed(2) +
      " km</b></span></p>" +
      "<p>Bạn gần trường nhất: <span class='text-danger'><b>" +
      tsv[vtminc] +
      "</b></span> với khoảng cách là <span class='text-danger'><b>" +
      minKc.toFixed(2) +
      " km</b></span></p>" +
      "<p>Và bạn còn lại là: <span class='text-danger'><b>" +
      tsv[vttbc] +
      "</b></span> có khoảng cách từ nhà đến trường là <span class='text-danger'><b>" +
      kc[vttbc].toFixed(2) +
      " km</b></span></p></div>";
  }
};

