

$.getJSON('data.json', function(data) {
// var data=data;
  console.log(data)

  
  var AreaSearch=$('.selectoption');
  var list=$('.listin');
  var address=$('.address');
  var card= $('.content');
  var allArea = [];
  var selectArea;
  var attractions = data;

  //放入景點資料
  for (var i = 0; i < data.length; i++) {
    allArea.push(data[i].district);

  }
  //過濾重複景點
  selectArea = allArea.filter(function(el, i, arr) {
    // var filterArea;
    return arr.indexOf(el) === i;
    // console.log(data);
  });

  var selectStr = '';
    for (var i = 0; i < selectArea.length; i++) {
        selectStr += '<option>' + selectArea[i] + '</option>';
        // $('.selectoption').html(selectStr);
        // AreaSearch.innerHTML = '<option>--請選擇景點--</option>' + selectStr;
        AreaSearch.html('<option>--請選擇區域--</option>' + selectStr);
    }
  AreaSearch.on( "change", function(e) {
    var searchValue = $(e.target).val();
    // alert(searchValue);
    getdata(searchValue);

  })
 

function getdata(searchValue) {

  var str = "";
  for (var i = 0; data.length > i; i++) {
      if (searchValue == data[i].district) {

            str += `

            <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card bg-light>
            <div class="card-body " >
            <h5 class="card-title areaName text-center font-weight-bold mt-3">`+data[i].name+`</h5>
            
            <p class="card-text mb-2 text-center">`+data[i].address+`</p>
            <div class="btnarea text-center">
            <button type="button" class="btn btn-info auto mb-3" data-viewNo="`+data[i].id+`"data-toggle="modal" data-target="#exampleModalLong">詳細介紹
            </div>
            </div>
            </div>
            </div>`

         
            
           
        }
        card.html(str);
        detaildata()
    }
   
    }
  function detaildata(){
      // $('.content').on( "click",".btn-primary", function(e) {
        var readMoreButton = document.querySelectorAll('.btn-info');
        for (var i = 0; i < readMoreButton.length; i++) {
          readMoreButton[i].addEventListener('click', function(e) {
              showViewData(e.srcElement.getAttribute('data-viewNo'));
          }, false);
      }
    }
       
  function showViewData(viewNo) {
  // console.log(viewNo)
 //
  for (var i = 0; i < data.length; i++) {

      if (viewNo == data[i].id) {
        var c=Object.values(data[i])

          document.querySelector('.modal-body').textContent = c[4];
          console.log('dd')
         
          break;
      }
  }
}      
}) 
