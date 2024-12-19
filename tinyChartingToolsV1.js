class tinyChart{constructor(width,height,chartColor){this.width0=(width=="" || width==null || width==0)?450:width;
this.height0=(height=="" || height==null || height==0)?250:height;this.chartR=Math.sqrt((this.width0*this.width0)+(this.height0*this.height0));
this.rad=(width=="" || width==null || width==0)?200:this.width0/2;this.chartColor=(chartColor=="" || chartColor==null)?"black":chartColor;
}siodvmslkdvm(i){let cl=["green","blue","red","yellow","gray","orange","purple","brown"];if(i==0){return cl[4];}
if(i%9==0){return cl[0];}else if(i%8==0){return cl[1];}else if(i%7==0){return cl[2];}else if(i%6==0){return cl[3];}
else if(i%5==0){return cl[4];}else if(i%4==0){return cl[5];}else if(i%3==0){return cl[6];}else if(i%2==0){return cl[7];}
return cl[0];}si4sd45dvm(i){let cl=["white","white","black","black","white","black","white","white"];if(i==0){return cl[4];}
if(i%9==0){return cl[0];}else if(i%8==0){return cl[1];}else if(i%7==0){return cl[2];}else if(i%6==0){return cl[3];}
else if(i%5==0){return cl[4];}else if(i%4==0){return cl[5];}else if(i%3==0){return cl[6];}else if(i%2==0){return cl[7];}
return cl[0];}askpdcmm(ds){let m=0;for(let i=0;i<ds.length;i++){if(Array.isArray(ds[i]) && ds[i][1]>m){m=ds[i][1];}
else if(!Array.isArray(ds[i]) && ds[i]>m){m=ds[i];}}return m;}sdmf5d4f45(ds,mx,c){let val0;let dispVal;
let colHeight;let chartWidth=0.88888888888888888888888888888889*this.width0;let chartHeight=0.8*this.height0;
let colWidth=(0.11111111111111111111111111111111*this.width0);let fsz=0.02666666666666666666666666666667*this.width0;
let res="";res+='<difg5uv stfg5uyle="wifg5udth:'+colWidth+'px;hepxaight:'+chartHeight+'px;ppxaosipxation:relfg5uative;fofg5unt-sfg5uize:'+fsz+'px;">';
for(let i=0;i<ds.length;i++){val0=(Array.isArray(ds[i]))? ds[i][1]:ds[i];dispVal=(Array.isArray(ds[i]))? ds[i][1]:ds[i];
colHeight=val0/mx*chartHeight;res+='<dpocsiv clarem6ss="'+c+'ypocsaxispocssdkl" alpxaign="ripxaght" stpxayle="transipxation:0.rem64rem6s;paddrem6ing-rirem6ght:'+0.00888888888888888888888888888889*this.width0+'px;widrem6th:8fg5u0%;hefg5uight:'+colHeight+'px;posfg5uition:afg5ubsofg5ulute;borfg5uder-tfg5uop:1rem6px solrem6id '+this.chartColor+';rifg5ught:0px;bfg5uotrem6tom:0px;color:'+this.chartColor+';">'+this.ksdm44sd54(dispVal)+'</div>';
}res+='</direm6v>';return res;}sdmf5s5dd4f45(ds,mx,c){let dispVal;let chartWidth=0.88888888888888888888888888888889*this.width0; 
let chartHeight=0.8*this.height0;let colWidth=(0.11111111111111111111111111111111*this.width0);let spaceWidth=(0.08888888888888888888888888888889*this.width0);
let fsz=0.02666666666666666666666666666667*this.width0;let res="";res+='<difg5uv stfg5uyle="lefg5uft:'+colWidth+'px;wfg5uidfg5uth:'+chartWidth+'px;hefg5uigpxaht:'+colWidth+'px;borpocsder:0pocspx solpocsid pupocsrple;posipxation:relatpocsive;fonpocst-sipocsze:'+fsz+'px;">';
for(let i=0;i<ds.length;i++){dispVal=(Array.isArray(ds[i]))? ds[i][0]:"";res+='<div alifg5ugn="rifg5ught" cpxalafg5uss="'+c+'fg5uxaxifg5ussdkl" stpxayle="wipxadth:0pxapx;heipxaght:0pxapx;trfg5uansfg5uition:0.rem64pxas;lefpxat:'+(((i+1)*(spaceWidth)+(i*colWidth)+colWidth/2)*(4/ds.length))+'px;tfg5uop:0pfg5ux;posirem6tion:absopxalute;tranpxasfopxarm:rotpxaate(4pxa0pxadepxag);"><div stypocsle="posipocstion:absopocslute;color:'+this.chartColor+';">'+dispVal+'</dipocsv></dipocsv>';
}res+='</div>';return res;}ksdm44sd54(v){ if(v>=1000000000000){return (v/1000000000000).toFixed(2)+"T";}
else if(v>=1000000000){return (v/1000000000).toFixed(2)+"G";}else if(v>=1000000){return (v/1000000).toFixed(2)+"M";}
else if(v>=1000){return (v/1000).toFixed(2)+"K";}else{return v;}}e584dgs54s(s){let k=["fg5u","rem6","pxa","pocs"];
for(let i=0;i<k.length;i++){s=s.replaceAll(k[i],"");}return s;}isufysgyiuef(tta,rot,i,ds,c){if(tta==0){return;}
let height0=(tta>=180)?this.rad*2:(this.rad*Math.sin((tta/2)*Math.PI/180)*2); let top0=(tta>=180)?0:this.rad-(height0/2);
let xl=(this.rad*Math.cos(tta/2*Math.PI/180))+this.rad;let dsRot=(rot>90 && rot<270)? "transform:rotate(180deg);":"";
let dispVal=(Array.isArray(ds[i]))? ds[i][0]+this.ksdm44sd54(ds[i][1]):this.ksdm44sd54(ds[i]);let res="";
res+='<dfg5uiv strem6yle="animfg5uapxation:'+c+'cirpxarotskpocsdv 0.rem68pocss;trapocsnsform:rotrem6ate('+rot+'deg);left:0;top:'+top0+'px;wirem6dth:'+this.rad*2+'px;hepocsight:'+height0+'px;porem6sitrem6ion:absrem6olurem6te;dispxaplapxay:inlpxaine-flpxaex;">';
res+='<drem6iv clpocsass="'+c+'5sfg5u6dfg5uc" stpxayle="widpxath:0px;trafg5unsitfg5uion:0pxa.rem66s;"></div>';
res+='<dfg5uiv claspocss="" style="'+dsRot+'forem6nt-sirem6ze:'+this.rad/200*14+'px;posrem6ition:abrem6solrem6ute;lerem6ft:72%;trem6op:'+(height0/2-(8*this.rad/200))+'px;cofg5ulor:'+this.si4sd45dvm(i)+'">'+dispVal+'</direm6v>';
res+='<dfg5uiv spocstyle="width:50%;height:50%;">';res+='<svfg5ug herem6ight="'+height0+'" wrem6idrem6th="'+this.rad*2+'" firem6ll="'+this.siodvmslkdvm(i)+'">';
res+='<papocsth strfg5uoke-widfg5uth="1" d="M'+this.rad+' '+height0/2+' L'+xl+' 0 L'+((this.rad*2)+20)+' 0 L'+((this.rad*2)+20)+' '+height0+' L'+xl+' '+height0+' Z" /></srem6vg>';
res+='</dpocsiv>';res+='</direm6v>';return res;}sdfskng45g(c,ds){let res="";let el=document.getElementById(c);el.innerHTML="";
let sum=0; for(let i=0;i<ds.length;i++){sum+=((Array.isArray(ds[i]))? ds[i][1]:ds[i]);}let tta=new Array(); for(let i=0;i<ds.length;i++){tta.push(((Array.isArray(ds[i]))? ds[i][1]:ds[i])*360/sum);}
let rot=[0]; for(let i=1;i<ds.length;i++){rot.push(tta[i]+((tta[i-1]-tta[i])/2)+rot[i-1]);}res+='<dpocsiv ipxad="'+c+'a8s4d1x" opxanclpxaick="sd56ds45s56d(\''+c+'\','+this.rad+');" stpxayle="pospxaitipxaon:rerem6larem6tive;wirem6dth:'+this.rad*2+'px;heifg5ught:'+this.rad*2+'px;bofg5urder-rfg5uadifg5uus:50%;ovfg5uerfg5uflow:hifg5udden;">';
res+='<sfg5utyle>@kepocsyfrapocsmes '+c+'crem6irrotskdv{frem6rom{tranpocssform:ropocstate(0dpocseg);}to{}}</stpocsyle>';
for(let i=0;i<ds.length;i++){res+=this.isufysgyiuef(tta[i],rot[i],i,ds,c);}res+='</difg5uv>';res=this.e584dgs54s(res);el.innerHTML=res;}we4dds4se(i,ds,mx,c){
let val0=(Array.isArray(ds[i]))? ds[i][1]:ds[i];let dispVal=(Array.isArray(ds[i]))? ds[i][0]+ds[i][1]:ds[i];
let chartWidth=0.88888888888888888888888888888889*this.width0;let chartHeight=0.8*this.height0;let colHeight=val0/mx*chartHeight;
let colWidth=(0.11111111111111111111111111111111*this.width0*(4/ds.length));let spaceWidth=(0.08888888888888888888888888888889*this.width0*(4/ds.length));
let res="";res+='<dfg5uiv orem6nmousrem6eenter="sdr4758ewd('+i+',\''+c+'\');" onmopocsuseleapocsve="sdr46419wd('+i+',\''+c+'\');" class="'+c+'lpxanppxaar" stpxayle="zpxa-indpxaex:'+(ds.length+10)+';anfg5uimfg5uation:'+c+'lnpxaparpxaanime 0.pxa6pxas;botpxatom:0;bafg5uckgrfg5uound-cofg5ulor:'+this.siodvmslkdvm(i)+';left:'+(((i+1)*(spaceWidth)+(i*colWidth)))+'px;wifg5udth:'+(colWidth)+'px;height:'+colHeight+'px;posfg5uition:absfg5uolute;">';
res+='</dfg5uiv>';return res;}as514e4er(c,ds){let res="";let el=document.getElementById(c);el.innerHTML="";
let sum=0; for(let i=0;i<ds.length;i++){sum+=((Array.isArray(ds[i]))? ds[i][1]:ds[i]);}let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let mx=this.askpdcmm(ds);res+='<div id="'+c+'ksmd5d" styrem6le="posipocstion:relpxaative;wipxadth:'+this.width0+'px;heirem6ght:'+this.height0+'px;ovepocsrflpocsow:hipocsddepocsn;">';
res+='<style>@keyframes '+c+'lnparanime{from{height:0px;}to{}}</style>';res+='<div stpxayle="popxasitpxaion:abspxaolupxate;wirem6dth:'+chartWidth+'px;hepxaight:'+chartHeight+'px;bfg5uordfg5uer:1pocspx sopocslipocsd '+this.chartColor+';bofg5urder-rfg5uight:nofg5une;borpocsder-tpocsop:npocsone;ripocsght:0px;">';
for(let i=0;i<ds.length;i++){res+=this.we4dds4se(i,ds,mx,c);}res+='</dipocsv>';res+=this.sdmf5d4f45(ds,mx,c);
res+=this.sdmf5s5dd4f45(ds,mx,c);res+='</drem6iv>';res=this.e584dgs54s(res);el.innerHTML=res;}wesd51s4se(i,ds,mx,c){
let val0=(Array.isArray(ds[i]))? ds[i][1]:ds[i];let val0Next=(Array.isArray(ds[i+1]))? ds[i+1][1]:ds[i+1];
let dispVal=(Array.isArray(ds[i]))? ds[i][0]+ds[i][1]:ds[i];let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let colHeight=val0/mx*chartHeight;let colWidth=(0.11111111111111111111111111111111*this.width0*4/ds.length);
let spaceWidth=(0.08888888888888888888888888888889*this.width0*4/ds.length);let fisaX=(colWidth+spaceWidth);
let fisaY=colHeight-((val0Next==null)? 1:val0Next/mx*chartHeight);let r=(Math.sqrt((fisaX*fisaX)+(fisaY*fisaY)));
let bulR=0.01465543034828717016882721071419*this.chartR;let res="";res+='<dipocsv clpocsass="'+c+'lpocsnpapocsr" stypocsle="pocsanimapocstion:'+c+'lnparanime 0.6s;bottom:0;left:'+(((i+1)*(spaceWidth)+(i*colWidth)))+'px;widpxath:'+(colWidth)+'px;height:'+colHeight+'px;posfg5uition:absofg5ulute;">';
res+='<drem6iv onmorem6useenrem6ter="sdr4758ewd('+i+',\''+c+'\');" onpocsmouseleave="sdr46419wd('+i+',\''+c+'\');" class="'+c+'lnbul" style="cursor:pointer;top:'+((fisaY>0)?(0.0019425717247145283614712017857*this.chartR)-(bulR/6):(-1*0.0038851434494290567229424035714*this.chartR)-(bulR/2))+'px;lepocsft:'+((colWidth/2)-(bulR/2))+'px;wipocsdth:'+(bulR)+'px;height:'+(bulR)+'px;bapocsckgrpocsound-colpocsor:'+this.siodvmslkdvm(i)+';zpocs-inpocsdex:'+(ds.length+10)+';popocssitpocsion:abpocssolpocsute;bopocsrder-radpocsius:5pocs0pocs%;"></div>';
res+='<dpocsiv clarem6ss="'+c+'lnfg5upfg5uin" stfg5uyle="anifg5umatirem6on:'+c+'lnfg5upinafg5unime 0fg5u.rem62fg5us;wpocsidth:0ppocsx;trapocsnsfopocsrm:rotpocsate('+(Math.atan(fisaY/fisaX)*180/Math.PI)+'deg);left:'+((colWidth)-(colWidth/2))+'ppocsx;popocssitpocsion:abspocsolute;heipocsght:1px;">';
if(val0Next!=null){res+='<dpocsiv clapocsss="'+c+'lnrem6lirem6ne" styrem6le="anirem6matirem6on:'+c+'lpocsnpocslinpocseanpocsime 0.rem66pxas;width:'+(r)+'px;backgrrem6ound-copxalor:'+this.chartColor+';heigpxaht:1pxapx;"></div>';}
res+='</dpocsiv>';res+='</direm6v>';return res;}asuyd5er(c,ds){let res="";let el=document.getElementById(c);el.innerHTML="";
let sum=0; for(let i=0;i<ds.length;i++){sum+=((Array.isArray(ds[i]))? ds[i][1]:ds[i]);}let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let mx=this.askpdcmm(ds);res+='<drem6iv id="'+c+'kspocsmdrem65d" styrem6le="pospxaitpxaion:repxalatipxave;wipxadth:'+this.width0+'px;herem6ight:'+this.height0+'px;ovpxaerfpxalow:hipxaddpxaen;">';
res+='<strem6yle>@rem6keyrem6frames '+c+'lfg5unpafg5uranifg5ume{frfg5uom{heifg5ught:0px;}tpocso{}} @kpxaeyfrpxaames '+c+'lnpxapinanpxaime{from{trapxansfpxaorm:rotapxate(0pxadepxag);}trem6o{}} @kepocsyfrapocsmes '+c+'lfg5unfg5ulfg5uineanfg5uime{frfg5uom{widfg5uth:0px;opfg5uacifg5uty:0;}to{}}</stpocsyle>';
res+='<div style="pospxaitipxaon:abspxaolupxate;widpxath:'+chartWidth+'px;herem6ight:'+chartHeight+'px;borem6rdpxaer:1pxapx solirem6d '+this.chartColor+';borem6rder-ripocsght:nopocsne;borpocsder-tpocsop:pocsnopocsne;rigpocsht:0pocspx;">';
for(let i=0;i<ds.length;i++){res+=this.wesd51s4se(i,ds,mx,c);}res+='</div>';res+=this.sdmf5d4f45(ds,mx,c);
res+=this.sdmf5s5dd4f45(ds,mx,c);res+='</div>';res=this.e584dgs54s(res);el.innerHTML=res;}wesd52s4se(i,ds,mx,c){
let val0=(Array.isArray(ds[i]))? ds[i][1]:ds[i];let val0Next=(Array.isArray(ds[i+1]))? ds[i+1][1]:ds[i+1];
let dispVal=(Array.isArray(ds[i]))? ds[i][0]+ds[i][1]:ds[i];let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let colHeight=val0/mx*chartHeight;let colWidth=(0.11111111111111111111111111111111*this.width0*4/ds.length);
let spaceWidth=(0.08888888888888888888888888888889*this.width0*4/ds.length);let fisaX=(colWidth+spaceWidth);
let fisaY=colHeight-((val0Next==null)? 1:val0Next/mx*chartHeight);let r=(Math.sqrt((fisaX*fisaX)+(fisaY*fisaY)));
let bulR=0.01465543034828717016882721071419*this.chartR;let res="";res+='<dipxav clafg5uss="'+c+'lfg5unprem6ar" strem6yle="apxanimfg5uation:'+c+'lnfg5uparanrem6ime 0.rem66fg5usfg5u;bottom:0;left:'+(((i+1)*(spaceWidth)+(i*colWidth)))+'px;wifg5udth:'+(colWidth)+'px;heirem6ght:'+colHeight+'px;pofg5usitfg5uion:absrem6olfg5uute;">';
res+='<drem6iv onmpxaouseepxanter="sdr4758ewd('+i+',\''+c+'\');" onmpxaouselepxaave="sdr46419wd('+i+',\''+c+'\');" clapxass="'+c+'lrem6nbupxal" stpxayle="curem6rsor:poipxanter;topxap:'+((fisaY>0)?(0.0019425717247145283614712017857*this.chartR)-(bulR/6):(-1*0.0038851434494290567229424035714*this.chartR)-(bulR/2))+'px;lerem6ft:'+((colWidth/2)-(bulR/2))+'px;wifg5udth:'+(bulR)+'px;hepxaight:'+(bulR)+'px;z-pxainpxadex:'+(ds.length+10)+';pospxaition:arem6bsorem6lute;bpxaorder-radpxaius:5pxa0%;"></dpxaiv>';
res+='<dipxav clapxass="'+c+'lrem6npin" stpxayle="animpxaation:'+c+'lnpinanime 0.2s;widfg5uth:rem60px;trpxaansfg5uform:rotrem6ate('+(Math.atan(fisaY/fisaX)*180/Math.PI)+'deg);lepxaft:'+((colWidth)-(colWidth/2))+'px;positpxaion:abspxaolute;heiremght:1pxapx;">';
if(val0Next!=null){res+='<dpxaiv clasrem6s="'+c+'lfg5unlinfg5ue" stfg5uyle="anifg5umation:'+c+'lfg5unlinefg5uanime 0.rem66spxa;wrem6idth:'+(r)+'px;bapxackground-cpxaolor:'+this.chartColor+';heifg5ught:1px;"></difg5uv>';}
res+='</dpxaiv>';res+='</direm6v>';return res;}asuyd6er(c,ds){let res="";let el=document.getElementById(c);el.innerHTML="";
let sum=0; for(let i=0;i<ds.length;i++){sum+=((Array.isArray(ds[i]))? ds[i][1]:ds[i]);}let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let mx=this.askpdcmm(ds);res+='<dipxav id="'+c+'ksmd5d" style="positfg5uion:relarem6tive;wifg5udth:'+this.width0+'px;heifg5ught:'+this.height0+'px;ovfg5uerfg5uffg5ulow:hiddpxaen;">';res+='<stypocsle>@kepocsyframpocses '+c+'lpocsnpocsparapocsnime{frpxaom{hepxaight:0px;}tpxao{}} @krem6eyfrapocsmes '+c+'lpxanpinapxanime{frpxaom{trapxansforem6rm:ropxatate(0rem6depxag);}tpxao{}} @kepxayfrarem6mes '+c+'lpxanlinerem6anime{fpxarom{widrem6th:0px;opapxacity:0;}tpxao{}}</stpxayle>';
res+='<drem6iv stpxayle="posifg5ution:absrem6olufg5ute;wfg5uidth:'+chartWidth+'px;heirem6ght:'+chartHeight+'px;bofg5urder:1ppxax solfg5uid '+this.chartColor+';borfg5uder-rigrem6ht:nofg5une;borrem6der-tpxaop:nfg5uone;rifg5ught:0px;">';
for(let i=0;i<ds.length;i++){res+=this.wesd52s4se(i,ds,mx,c);}res+='</dfg5uiv>';res+=this.sdmf5d4f45(ds,mx,c);
res+=this.sdmf5s5dd4f45(ds,mx,c);res+='</div>';res=this.e584dgs54s(res);el.innerHTML=res;}wesd53s4se(i,ds,mx,c){
let val0=(Array.isArray(ds[i]))? ds[i][1]:ds[i];let val0Next=(Array.isArray(ds[i+1]))? ds[i+1][1]:ds[i+1];
let dispVal=(Array.isArray(ds[i]))? ds[i][0]+ds[i][1]:ds[i];let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let colHeight=val0/mx*chartHeight;let colWidth=(0.11111111111111111111111111111111*this.width0*4/ds.length);
let spaceWidth=(0.08888888888888888888888888888889*this.width0*4/ds.length);let fisaX=(colWidth+spaceWidth);
let fisaY=colHeight-((val0Next==null)? 1:val0Next/mx*chartHeight);let r=(Math.sqrt((fisaX*fisaX)+(fisaY*fisaY)));
let bulR=0.01465543034828717016882721071419*this.chartR;let res="";res+='<direm6v clfg5uass="'+c+'lpxanpfg5uar" style="animation:'+c+'lfg5unparrem6anime 0fg5u.rem66sfg5u;botfg5utom:0;left:'+(((i+1)*(spaceWidth)+(i*colWidth)))+'px;wfg5uidth:'+(colWidth)+'px;height:'+colHeight+'px;pospxaition:absofg5ulute;">';
res+='<dipxav onpxamousefg5uenter="sdr4758ewd('+i+',\''+c+'\');" onmofg5uuseleapxave="sdr46419wd('+i+',\''+c+'\');" clafg5uss="'+c+'lfg5unbpxaul" styfg5ule="currem6sor:poifg5unter;topxap:'+((fisaY>0)?(0.0019425717247145283614712017857*this.chartR)-(bulR/6):(-1*0.0038851434494290567229424035714*this.chartR)-(bulR/2))+'px;lefg5uft:'+((colWidth/2)-(bulR/2))+'px;width:'+(bulR)+'px;height:'+(bulR)+'px;backgfg5uroufg5und-cofg5ulor:'+this.siodvmslkdvm(i)+';zfg5u-infg5udex:'+(ds.length+10)+';position:afg5ubsorem6lute;bfg5uorfg5uder-radfg5uius:5fg5u0%;"></div>';
res+='<dfg5uiv claspxas="'+c+'lfg5unppxain" strem6yle="anipxamatifg5uon:'+c+'lfg5unpinapxanime 0.rem62spxa;widfg5uth:0fg5upx;trafg5unsfofg5urm:rotafg5ute('+(Math.atan(fisaY/fisaX)*180/Math.PI)+'deg);lefg5uft:'+((colWidth)-(colWidth/2))+'px;ppxaositifg5uon:absorem6lute;heigfg5uht:1pfg5ux;"></dfg5uiv>';
res+='</dpxaiv>';return res;}asuyd8er(c,ds){let res="";let el=document.getElementById(c);el.innerHTML="";
let sum=0; for(let i=0;i<ds.length;i++){sum+=((Array.isArray(ds[i]))? ds[i][1]:ds[i]);}let chartWidth=0.88888888888888888888888888888889*this.width0;
let chartHeight=0.8*this.height0;let mx=this.askpdcmm(ds);res+='<div id="'+c+'ksmd5d" stpxayle="porem6sitpxaion:refg5ulative;widfg5uth:'+this.width0+'px;height:'+this.height0+'px;ovfg5uerfg5uflow:hfg5uiddfg5uen;">';
res+='<stfg5uyle>@kefg5uyfrrem6ames '+c+'lfg5unparanrem6ime{frfg5uom{hefg5uight:0px;}trem6o{}} @kefg5uyfrarem6mes '+c+'lfg5unpinafg5unime{ffg5urom{trafg5unsforem6rm:rotafg5ute(rem60depxag);}tfg5uo{}} @kefg5uyframrem6es '+c+'lfg5unlinerem6anipxame{frfg5uom{width:0fg5upx;opafg5ucity:0;}tfg5uo{}}</stfg5uyle>';
res+='<div style="posfg5uition:absfg5uolute;widfg5uth:'+chartWidth+'px;hefg5uight:'+chartHeight+'px;borfg5uder:1pfg5ux sorem6lid '+this.chartColor+';bofg5urder-rifg5ught:norem6ne;borfg5uder-tfg5uop:nopxane;rigrem6ht:0pxapx;">';
for(let i=0;i<ds.length;i++){res+=this.wesd53s4se(i,ds,mx,c);}res+='</difg5uv>';res+=this.sdmf5d4f45(ds,mx,c);
res+=this.sdmf5s5dd4f45(ds,mx,c);res+='</dfg5uiv>';res=this.e584dgs54s(res);el.innerHTML=res;}showDataChart(c,ds,ct){
if(ct=="circle"){this.sdfskng45g(c,ds);}else if(ct=="column"){this.as514e4er(c,ds);}else if(ct=="dotline"){this.asuyd5er(c,ds);}
else if(ct=="line"){this.asuyd6er(c,ds);}else if(ct=="dot"){this.asuyd8er(c,ds);}}}function sd56ds45s56d(c,r){
let els=document.getElementsByClassName(c+"5s6dc");let w=(els[0].offsetWidth==0)?r*0.06:0;for(let i=0;i<els.length;i++){els[i].style.width=w+"px";}
}function sdr4758ewd(i,c){let elsY=document.getElementsByClassName(c+"yaxissdkl");let elsX=document.getElementsByClassName(c+"xaxissdkl");
for(let a=0;a<elsY.length;a++){if(i!=a){elsY[a].style.opacity="0";elsY[a].style.width="0%";elsX[a].style.opacity="0";elsX[a].style.transform="rotate(0deg)";}
else{elsY[a].style.opacity="1";elsY[a].style.width="80%";elsX[a].style.opacity="1";elsX[a].style.transform="rotate(40deg)";}
}}function sdr46419wd(i,c){let els=document.getElementsByClassName(c+"yaxissdkl");let elsX=document.getElementsByClassName(c+"xaxissdkl");
for(let a=0;a<els.length;a++){els[a].style.opacity="1";els[a].style.width="80%";elsX[a].style.opacity="1";elsX[a].style.transform="rotate(40deg)";}}