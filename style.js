  //星座の画像
  hosi=new Array("img/ohituzi","img/ousi","img/hutago","img/kani","img/sisi","img/otome","img/tenbin","img/sasori","img/ite","img/yagi","img/mizugame","img/uo");
  hosi_pic=new Array();
  for(i=0;i<12;i++)
    {hosi_pic[i]=new Image();
     hosi_pic[i].src=""+hosi[i]+".gif";}
  hosi_pic[12]=new Image();
  //正解の画像
  hosi_pic[12].src="img/maru.gif";

  //星座の配列
  hosi_name=new Array("牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座");

  //画像を繰り返し表示する
  function img_load()
	 {
	 for(i=0; i<hosi_pic.length; i++)document.images["hidden"].src=hosi_pic[i].src;
	 document.images["hidden"].src=hosi_pic[12].src;
	 }

  //問題
  function hajime()
   {
   document.form1.text1.value="";
   for(i=0;i<12;i++)document.images[i].src=hosi_pic[i].src;
   ran=Math.floor(Math.random()*100);
   while( ran > 11 )ran=Math.floor(Math.random()*100);
   document.form1.text1.value=hosi_name[ran]+"はどのマーク？";
   }

  //正解か不正解か
  function colors(kazu)
   {
   if(ran == kazu)
	 {document.form1.text1.value=hosi_name[ran]+"大正解だぜ！やるな！";
	  for(i=0; i<12; i++)if(i!=kazu)document.images[i].src=hosi_pic[12].src;}
    else alert("勉強不足…無念");
   }