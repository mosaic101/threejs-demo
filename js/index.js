/**
 * Created by admin on 2016/11/15.
 */
var container, scene, camera, renderer, boxGroup, skyGroup = new THREE.Group(),planGroup = new THREE.Group(),
    bigSkyPlaneGeometry,bigSkyPlaneMaterial,moveplan1,moveplanGeometry,Devices;
var e = 0,
    f = 0,
    j = 0;
    k=0;
    q=0;
    w=0;

var sp1 = 5,
    sp2 = 100;
var a = 0,
    b = 0,
    c = 0,
    s = 0;
var speed = 10,
    direction = -10,
    isPause = false,
    isCritical = false,
    minDistance = false,
    maxDistance = false;

var startX = 0,
    moveX = 0,
    endX = 0;
var minCmera = 710;
var maxCmera = 72900;
var obj=new THREE.Object3D();
var data;


var stats;
var start=false;
var load=document.getElementById("loader");
var p=document.getElementById("txt");
//创建一个加载
var loader = new window.PxLoader();
var maps = [];

var fileList = [
//    sence1
    'images/c1/scene_1_yun_6.png',
    'images/c1/scene_1_yun_1.png',
    'images/c1/scene_1_yun_1.png',
    'images/c1/scene_1_yun_4.png',
    'images/c1/scene_1_yun_4.png',
    'images/c1/scene_1_yun_1.png',
    'images/c1/scene_1_yun_4.png',
    'images/c1/scene_1_yun_4.png',
    'images/c1/scene_1_feiji_01.png',
    'images/zimu/01.png',
    'images/c1/scene_1_tiaosan_04.png',
    'images/c1/scene_1_tiaosan_03.png',
    'images/c1/scene_1_tiaosan_02.png',
    'images/c1/scene_1_tiaosan_01.png',
    'images/c1/scene_1_reqiqiu_02.png',
    'images/c1/scene_1_reqiqiu_01.png',
    'images/c1/scene_1_reqiqiu_03.png',
    'images/c1/scene_1_zhishengji_01.png',
    'images/c1/scene_1_fanhuicang.png',
    'images/zimu/biaoti_01.png',
    'images/c1/scene_1_dimian.jpg',
    'images/c1/scene_1_tiaosan_02.png',
    'images/c1/scene_1_tiaosan_01.png',


//    sence2
    'images/c2/scene_2_BG_01.jpg',
    'images/zimu/02.png',
    'images/c2/scene_2_bingkuai_01.png',
    'images/c2/scene_2_bingkuai_02.png',
    'images/c2/scene_2_bingkuai_03.png',
    'images/c2/scene_2_bingkuai_06.png',
    'images/c2/scene_2_huixing_01.png',
    'images/c2/scene_2_huixing_02.png',
    'images/c2/scene_2_weixing_01.png',
    'images/c2/scene_2_yunshi_01.png',
    'images/c2/scene_2_yunshi_02.png',
    'images/c2/scene_2_yunshi_03.png',
    'images/c2/scene_2_yunshi_04.png',
    'images/c2/scene_2_yunshi_05.png',
//36
//   sence3
    'images/c3/scene_3_BG_01a.png',
    'images/c3/scene_3_shouji_06.png',
    'images/zimu/03.png',
    'images/c3/scene_3_shu_01.png',
    'images/c3/scene_3_xiangzi_01.png',
    'images/c3/scene_3_xiangzi_02.png',
    'images/c3/scene_3_yuhangyuan_01.png',
    'images/c3/scene_3_yuhangyuan_02.png',
//
//   sence4
    'images/c4/scene_4_yuhangyuan_02.png',
    'images/c4/scene_4_yuhangyuan_01.png',
//    'images/c4/scene_4_xinqiu_03.png',
    'images/c4/scene_4_xinqiu_02.png',
    'images/c4/scene_4_xinqiu_01.png',
    'images/c4/scene_4_weixing_01.png',
    'images/c4/scene_4_kongjianzhan_01a.png',
    'images/c4/scene_4_chuanghu_01.png',
    'images/c4/scene_4_hongseguang_01.png',
    'images/c4/scene_4_BG_01.jpg',
    'images/c4/scene_4_yunshi_11.png',
    'images/c4/scene_4_yunshi_08.png',
    'images/c4/scene_4_yunshi_05.png',
    'images/c4/scene_4_yunshi_02.png',
    'images/c4/scene_4_bingkuai_01.png',
    'images/c4/scene_4_bingkuai_02.png',
    'images/c4/scene_4_bingkuai_05.png',
    'images/c4/scene_4_bingkuai_07.png',
    'images/zimu/04.png',

//sence5
    'images/c5/scene_5_m6.png',
    'images/c5/scene_5_bg.jpg',
    'images/c5/sence_5_huojian.png',
    'images/c5/sece_5_yun.png',
    'images/c5/sence_5_dimian.png',
    'images/c5/sece_5_huangyun.png',
    'images/c5/sece_5_huangyun_1.png',
    'images/c5/sece_5_huangyun_1.png',
    'images/c5/sece_5_huangyun_1.png',
    'images/c5/sece_5_huangyun_2.png',
    'images/c5/sece_5_huangyun_2.png',
    'images/c5/sece_5_huangyun_2.png',
    'images/c5/sece_5_huangyun_2.png',
    'images/c5/sece_5_huangyun_2.png',
    'images/zimu/dingban_01.png',
    'images/c4/scene_4_xinqiu_03.png',


//    星云
    'images/c4/scene_4_xingyun_01.png',
    'images/c4/scene_4_xingyun_02.png',
    'images/c4/scene_4_xingyun_03.png',

    'images/c1/scene_1_dimian_1.png'
];

for(var i = 0; i < fileList.length; i++) {
    loader.addImage(fileList[i]);
}



//加载的进度...
loader.addProgressListener(function(e) {

});
//背景音乐自动播放
document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('bg_music');
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        //bellBtnClick(1500);
        //setInterval('bellBtnClick(1500)',2500);
        //setTimeout(bellBtnClick(1500),2000);
    }
    audioAutoPlay();
});
//加载完成执行...
loader.addCompletionListener(function() {
    //setTimeout(function(){
    setTimeout(function(){
        load.style.display='none';
        isPause = false;
        document.getElementById("bg_music").play();
    },2000);

    init();
    animate();
    //},500);
    //},500);

});
//开始加载loader...
loader.start();
var textureLoader = new THREE.TextureLoader();




function init() {
    container = document.getElementById("container");
    page =  document.getElementById("page");
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 120000);
    camera.position.z = 6300;
    camera.position.y = -33;
    camera.position.x = 0;
    scene.add(camera);

    scene.add(obj);

    boxGroup=new THREE.Group();

    scene.add(boxGroup);
    var o = new Orienter();

    o.orient = function (objed) {

        if(objed.b>0&&objed.b<85){
            camera.position.y = (objed.b-85)*1.412345678;
        }
        if(objed.g>-35&&objed.g<35){
            camera.position.x = objed.g*1.71234564156415151515;
        }
    };
    o.init();



    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x333333);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    page.addEventListener('touchstart', onTouchStart, false);

    window.addEventListener('resize', onWindowResize, false);

    data = [
//sence1
        {name:'scene_1_yun_6' ,w:1208  ,h:629 ,x:94 ,y:123 ,z:6908 },
        {name:'scene_1_yun_1_2' ,w:1011  ,h:755 ,x:-233 ,y:-185 ,z:6792 },
        {name:'scene_1_yun_1_3' ,w: 1011 ,h:755 ,x:-233 ,y:120,z:7270 },
        {name:'scene_1_yun_4_2' ,w:1421  ,h: 1097,x:60.9 ,y:-177 ,z:7159 },
        {name:'scene_1_yun_4_4' ,w:1421  ,h:1097 ,x:-133 ,y: 81,z:7329 },
        {name:'scene_1_yun_1_1' ,w:1011  ,h:755,x:218 ,y:-308 ,z:5539},
        {name:'scene_1_yun_4_1' ,w:1421  ,h:1097 ,x:-250,y:1057 ,z:3994 },
        {name:'scene_1_yun_4_3' ,w:1421,h:1097 ,x:36 ,y:-20 ,z:7243 },
        {name:'scene_1_feiji_01' ,w: 1108 ,h:933 ,x:75.6,y:243 ,z:4758 },
        {name:'03' ,w:870  ,h:229 ,x:5 ,y:2 ,z:3055 },
        {name:'scene_1_tiaosan_04' ,w:134 ,h:96,x:-75  ,y:-25 ,z:2709 },
        {name:'scene_1_tiaosan_03' ,w:221 ,h:171 ,x:5.6 ,y:-5  ,z:2225 },
        {name:'scene_1_tiaosan_02' ,w:143  ,h:155  ,x:8 ,y:-98  ,z:2639},
        {name:'scene_1_tiaosan_01',w:160 ,h:107 ,x:129 ,y:26,z:1786 },
        {name:'scene_1_reqiqiu_02' ,w:184 ,h: 150 ,x:226 ,y:315,z:693 },
        {name:'scene_1_reqiqiu_01' ,w:223 ,h:215 ,x:132 ,y:-125,z:552 },
        {name:'scene_1_reqiqiu_03' ,w:111 ,h:107 ,x:-545 ,y:994 ,z:28  },
        {name:'scene_1_zhishengji_01' ,w:594,h:305 ,x:-171,y:331,z:130},
        {name:'scene_1_fanhuicang' ,w:492 ,h:492 ,x:-13,y:-51,z:60 },
        {name:'biaoti_01',w: 402*0.8,h:131*0.8 ,x:0 ,y:185,z:70},
        {name:'scene_1_dimian' ,w: 6688,h:11890 ,x:-475 ,y:411,z:0},
//关于y
        {name:'scene_1_tiaosan_02' ,w: 151,h:155 ,x:19 ,y:110,z:2639},
//关于x
        {name:'scene_1_tiaosan_01' ,w: 160,h:107 ,x:-95 ,y:26,z:1786},

//sence2
        {name:'scene_2_BG_01' ,w:5138 ,h:9136 ,x:15 ,y:-170,z:7377 },
        {name:'04' ,w:498 ,h:131 ,x:23 ,y:29,z:8926 },
        {name:'scene_2_bingkuai_01' ,w:231 ,h:183 ,x:-293 ,y:358,z:12515},
        {name:'scene_2_bingkuai_02' ,w:97 ,h:119 ,x:15 ,y:522,z:12448},
        {name:'scene_2_bingkuai_03' ,w:322 ,h:151 ,x:144 ,y:-1098,z:11271 },
        {name: 'scene_2_bingkuai_06' ,w: 322,h:151 ,x:659 ,y:-546,z:11803 },
        {name:'scene_2_huixing_01' ,w:468 ,h: 253,x:-641 ,y:864,z:10195 },
        {name:'scene_2_huixing_02' ,w:1067,h:896 ,x:533 ,y:1717,z:9107 },
        {name:'scene_2_weixing_01' ,w: 1051,h:732 ,x:-122 ,y:-104 ,z:11687 },
        {name: 'scene_2_yunshi_01',w: 155,h: 141,x:-220,y:-110,z:10088},
        {name: 'scene_2_yunshi_02',w:125 ,h:95,x:124 ,y:231,z:9107 },
        {name: 'scene_2_yunshi_03',w:168 ,h: 102,x:152 ,y:-33,z:10990},
        {name: 'scene_2_yunshi_04',w:223 ,h:171,x: 266,y:-444,z:9386 },
        {name:'scene_2_yunshi_05' ,w:150 ,h:115,x:-68 ,y:42,z:11191},

//      scene_3
        {name:'scene_3_BG_01a' ,w:1383*1.1 ,h:2460*1.1 ,x:32 ,y:-105 ,z:13399 },
        {name:'scene_3_shouji_06' ,w:40 ,h:43 ,x:-5  ,y:-44 ,z:14690},
        {name:'06' ,w:211 ,h: 55,x: 1,y:-21 ,z:14161},
        {name:'scene_3_shu_01' ,w:53 ,h:61 ,x:30  ,y:246 ,z:13985 },
        {name:'scene_3_xiangzi_01' ,w:109 ,h:97  ,x:-44 ,y:56 ,z:13943 },
        {name:'scene_3_xiangzi_02' ,w:97 ,h:112 ,x:162 ,y:-121 ,z:13943 },
        {name:'scene_3_yuhangyuan_01' ,w:158 ,h:224 ,x:-62 ,y:-10 ,z:14040 },
        {name:'scene_3_yuhangyuan_02' ,w:164 ,h:188 ,x:48 ,y:-8 ,z:14576 },

//      scene_4
        {name:'scene_4_yuhangyuan_02' ,w:448 ,h:338 ,x:96 ,y:-38,z:16426 },
        {name:'scene_4_yuhangyuan_01' ,w:2167 ,h:1348 ,x:70 ,y:-918,z:22652 },
        {name:'scene_4_xinqiu_02' ,w: 3418,h:3391 ,x:4987 ,y:-9513,z:-6694 },
        {name:'scene_4_xinqiu_01' ,w:1877 ,h:1966 ,x:14559 ,y:22065,z:-22000 },
        {name:'scene_4_weixing_01' ,w:5398 ,h:2083 ,x:-994 ,y:2819,z:17436 },
        {name:'scene_4_kongjianzhan_01a' ,w:4342 ,h:3291 ,x:142,y:536,z:15046},
        {name:'scene_4_chuanghu_01' ,w:105 ,h:105 ,x:0.5,y:-17.6,z:15030},
        {name:'scene_4_hongseguang_01',w:645 ,h:940 ,x:-4612 ,y:-49,z: 14814},
        {name:'scene_4_BG_01' ,w:43597*1.2 ,h:72760*1.2 ,x:0,y:-49,z:-24594},
        {name:'scene_4_yunshi_11' ,w:3243 ,h:5766 ,x:-52 ,y:178,z:19202},
        {name:'scene_4_yunshi_08' ,w:500 ,h:522 ,x:579 ,y:-989,z:19202},
        {name:'scene_4_yunshi_05' ,w:458 ,h:396 ,x:370 ,y:223,z:21282 },
        {name:'scene_4_yunshi_02' ,w:778 ,h:722 ,x:-665 ,y:-869,z:15869 },
        {name:'scene_4_bingkuai_01' ,w:330 ,h:310  ,x:835 ,y:-392,z:19318 },
        {name:'scene_4_bingkuai_02' ,w:309 ,h:134 ,x:-288 ,y:-177,z:18652 },
        {name:'scene_4_bingkuai_05',w:325 ,h:153 ,x:219 ,y:11,z:17043 },
        {name:'scene_4_bingkuai_07' ,w:387  ,h:305 ,x:-659 ,y:552,z:16779},
        {name:'07' ,w:1094,h:288 ,x:-1 ,y:156,z:18369},

//sence5
        {name:'scene_5_m6' ,w:2986 ,h:6229 ,x:0,y:-1358,z:65603 },
        {name:'scene_5_bg' ,w:23325 ,h:41469 ,x:62,y:1530,z:46207 },
        {name: 'sence_5_huojian',w:11070*0.6 ,h:17247*0.6 ,x:118,y:-2063,z:54085 },
        {name:'sece_5_yun' ,w:5267 ,h:1896 ,x:9,y:-5194,z:54778 },
        {name:'sence_5_dimian' ,w:16175*1.3 ,h:11201 ,x:-84,y:-10256,z:53225 },
        {name:'sece_5_huangyun',w:17797*0.6 ,h:9325*0.6 ,x:-1061,y:-2897,z:33425 },
        {name:'sece_5_huangyun-1' ,w:9960,h:5219 ,x:-3286,y:14166,z:37612 },
        {name:'sece_5_huangyun_1' ,w:11059 ,h:8792,x:-332,y:5852,z:29694 },
        {name:'sece_5_huangyun_1_1' ,w:11059 ,h:8792 ,x:1890,y:4573,z:34945 },
        {name:'sece_5_huangyun_2' ,w:10928*1.5 ,h:12425*1.5 ,x:1868,y:1123,z:23416 },
        {name:'sece_5_huangyun_2_1' ,w:10928 ,h:12425 ,x:-775,y:-3869,z:41560 },
        {name:'sece_5_huangyun_2_2' ,w:10928 ,h:13890 ,x:-122,y:901,z:44578 },
        {name:'sece_5_huangyun_2_3' ,w:10928 ,h:12425 ,x:-3184,y:-6153,z:22510 },
        {name:'sece_5_huangyun_2_4' ,w:10928 ,h:12425 ,x:-5145 ,y:13105,z:22941},
        {name:'dingban',w:2850 ,h:1489 ,x:0,y:2578,z:65620 },
        {name:'scene_4_xinqiu_03',w:7348,h:7526 ,x:-1714,y:1108,z:24976},
        {name:'scene_4_xingyun_01' ,w:19552,h:19552 ,x:4349 ,y:8207,z:604},
        {name:'scene_4_xingyun_02' ,w:38796,h:38796 ,x:-7186 ,y:15479,z:-13568},
        {name:'scene_4_xingyun_03' ,w:9214,h:9214 ,x:-532 ,y:-3315,z:8354},

        {name:'scene_1_dimian_1_1' ,w:1554 ,h:1242 ,x:0,y:8,z:40}
    ];

    for(var i = 0; i < data.length; i++) {
        if(i==21){
            drawScene(data[i].w, data[i].h, fileList[i], data[i].x,data[i].y, data[i].z,-1,1);

        }
        else if(i==22){
            drawScene(data[i].w, data[i].h, fileList[i], data[i].x,data[i].y, data[i].z,1,-1);

        }else{
            drawScene(data[i].w, data[i].h, fileList[i], data[i].x,data[i].y, data[i].z,1,1);
        }
    }

}
var amaps=[];
var amaps2=[];

function drawScene( w, h, i, x, y, z, r,r2) {
    var mapTexture = textureLoader.load(i);
    var sceneGeometry = new THREE.PlaneGeometry(w, h);
    var sceneMaterial = new THREE.MeshBasicMaterial({
        map: mapTexture,
        transparent: true,
        side: THREE.DoubleSide

    });
    var scenePlaneMesh = new THREE.Mesh(sceneGeometry, sceneMaterial);
    scenePlaneMesh.position.x = x;
    scenePlaneMesh.position.y = y;
    scenePlaneMesh.position.z = z;
    scenePlaneMesh.scale.y = r;
    scenePlaneMesh.scale.x = r2;
    boxGroup.add(scenePlaneMesh);

    amaps.push(scenePlaneMesh);
    amaps2.push(sceneGeometry)
}
var wend_num =24;

function onTouchStart(e) {
    e.preventDefault();
}


$(".link_btn").tap(function(){
    $(".alert").addClass("alertshow");
});

$(".alert").tap(function(){
    $(".alert").removeClass("alertshow");
});
    isPause = !isPause;

    $("#container").tap(function(e){
        e.preventDefault();
        isPause=true;

        day_01.removeClass("day_01_active");

    });
    $("#container").swipeDown(function(e){
        e.preventDefault();
        isPause = false;
        isCritical = false;
        minDistance = false;
        if(direction>0){
            direction=-3;
        }
        direction -=1;
        $(".slide").hide();
        day_01.addClass("day_01_active");
        $(".masl_tiao").removeClass("masl_tiaoac");
    });
    $("#container").swipeUp(function(e){
        e.preventDefault();
        isPause = false;
        isCritical = false;
        maxDistance = false;
        if(direction<0){
            direction=3;
        }
        direction +=1;
        $(".slide").hide();
        day_01.addClass("day_01_active");
        $(".masl_tiao").addClass("masl_tiaoac");
    });


function onTouchMove(e) {
    e.preventDefault();
    var touch = e.touches[0];
    moveX = touch.pageX - startX;
}

var s = 0;


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

var day_01 = $(".day_01");
var dian_liang = $(".dian_liang");
var n1=0,n2=0,n3=0,n4=0,n5=0;
var m1=0,m2=0;
var last_half;
var day_num;
var day_numd= $(".day_num");
var wendu_num= $(".wendu_num");
var slde = $(".slide");
var cameraz;
var nowde;
var tishi = $(".tishi_ceng");
var link_btn = $(".link_btn");
function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {

    if(!isPause) {

        if(!isCritical) {
            camera.position.z += speed * direction;
            if(camera.position.z < minCmera) {
                camera.position.z = minCmera;
                isPause = true;
                minDistance = true;
                isCritical = true;
            }
            if(camera.position.z > maxCmera) {
                camera.position.z = maxCmera;
                isPause = true;
                maxDistance = true;
                isCritical = true;
            }
        }


        if((camera.position.z-710)>=0){
            last_half = parseInt(camera.position.z/((maxCmera-710)/32)+1);
            day_num = parseInt(34-last_half);
            day_numd.text(day_num);
        }
        if(camera.position.z<=710){
            if(s<1){
                setTimeout(function(){
                    slde.css("display","block");
                },500);
                s++;

            }

        }
        if(camera.position.z<=15214){
            if(k<1) {
                amaps[37].material.opacity = 1;
                amaps[51].material.opacity = 0;
                for(i=0;i<35;i++){
                    amaps[i].material.opacity = 1;

                }

                k++;
                j=0;

            }

        }
        if(camera.position.z>15214&&camera.position.z<15800){
            if(j<1){
                amaps[37].material.opacity = 0;
                amaps[51].material.opacity = 1;
                for(i=0;i<35;i++){
                    amaps[i].material.opacity = 0;
                }
                j++;
                k=0;

            }


        }




        if(camera.position.z<5555&&camera.position.z>710){
            if(n1<1){
                speed=5;
                n1++;
                n2=0;
                n3=0;
                n4=0;
                n5=0;

            }


        }
        if(camera.position.z<12800&&camera.position.z>5555){
            if(n2<1){
                speed=7;
                n2++;
                n1=0;
                n3=0;
                n4=0;
                n5=0;

            }

        }

        if(camera.position.z>12800&&camera.position.z<13500)
        {
            if(n3<1){
                speed=10;
                n3++;
                n1=0;
                n2=0;
                n4=0;
                n5=0;

            }

        }
        if(camera.position.z>13500&&camera.position.z<15100)
        {

            if(n4<1){
                speed=1.6;
                n4++;
                n1=0;
                n2=0;
                n3=0;
                n5=0;

            }

        }
        if(camera.position.z>15100&&camera.position.z<25650){
            if(n5<1){
                speed=10;
                n5++;
                n1=0;
                n2=0;
                n3=0;
                n4=0;
                q=0;

            }

        }


        if(camera.position.z>25650&&camera.position.z<maxCmera){
            if(q<1){
                speed=30;
                q++;
                n5=0;

            }


        }

        if(camera.position.z>=maxCmera){
            if(m1<1){
                link_btn.addClass("link_btnac");

            }
            m1++;
            m2=0;
        }
        else if(camera.position.z<maxCmera){
            if(m2<1){
                link_btn.removeClass("link_btnac");

            }
            m2++;
            m1=0;
        }
    }
    renderer.clear();
    renderer.render(scene, camera);

}

