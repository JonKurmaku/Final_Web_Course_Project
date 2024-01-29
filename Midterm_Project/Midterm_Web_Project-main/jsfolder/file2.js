function search(e){
    e.preventDefault();
    const year = document.getElementById("year").value;
    const model = document.getElementById("model").value;
    const price = document.getElementById("Price").value;

    let fin_model=model.toLowerCase();
    let price1=(price.substring(1));
    let fin_price=price1.replaceAll(',',"");
    

    //alert(year+" "+fin_model+" "+fin_price);
    window.location.assign(`https://www.autoscout24.com/lst/${fin_model}?atype=C&desc=0&fregfrom=${year}&priceto=${fin_price}&sort=standard&source=homepage_search-mask&ustate=N%2CU`);

}