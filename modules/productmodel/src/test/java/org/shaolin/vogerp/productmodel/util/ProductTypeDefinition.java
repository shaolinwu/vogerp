package org.shaolin.vogerp.productmodel.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.shaolin.bmdp.utils.FileUtil;
import org.shaolin.bmdp.utils.ImageUtil;
import org.shaolin.uimaster.page.ajax.json.JSONArray;
import org.shaolin.uimaster.page.ajax.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ProductTypeDefinition {

	private static final String UserAgent = "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.4; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2";
	private static Map<String, Map<String, String[]>> productType = new HashMap<String, Map<String, String[]>>();
	//工业设备及组件
	private static Map<String, String[]> productSubType1 = new HashMap<String, String[]>();
	//制造加工机械
	private static Map<String, String[]> productSubType2 = new HashMap<String, String[]>();
	//五金工具
	private static Map<String, String[]> productSubType3 = new HashMap<String, String[]>();
	//仪器仪表
	private static Map<String, String[]> productSubType4 = new HashMap<String, String[]>();
		
	static {

		productSubType1.put("泵及真空设备", new String[] { "离心泵", "隔膜泵", "油泵", "齿轮泵",
				"计量泵", "泥浆泵", "其它泵及真空设备", "柱塞泵", "压力泵", "自吸泵", "排污泵", "真空泵",
				"水泵", "泵", "配件磁力泵", "高压泵", "管道泵", "化工泵", "螺杆泵", "耐腐蚀泵", "屏蔽泵",
				"潜水泵", "试压泵", "往复泵", "污水泵", "增压泵", "轴流泵", "转子泵", "漩涡泵" });

		productSubType1.put("阀门", new String[] { "调节阀", "角阀", "球阀", "蝶阀", "止回阀",
				"控制阀", "隔膜阀", "闸阀", "单向阀", "其它阀门及配件", "旋塞阀", "减压阀", "安全阀",
				"电磁阀", "阀", "体电动阀", "底阀", "阀", "门配件放料阀", "换向阀", "节流阀", "截止阀",
				"流量控制阀", "排气阀", "排污阀", "燃气阀", "手动阀", "疏水阀", "仪表阀", "溢流阀",
				"针形阀", "执行器柱塞阀" });

		productSubType1.put("轴承", new String[] { "其它轴承", "滑动轴承", "滚动轴承", "调心球轴承",
				"调心滚子轴承", "关节轴承", "滚针轴承", "角接触球轴承", "深沟球轴承", "推力滚子轴承", "推力球轴承",
				"圆柱滚子轴承", "圆锥滚子轴承", "直线轴承", "转盘轴承" });

		productSubType1.put("刀具和夹具", new String[] { "刀片", "钻头", "刀柄和刀杆", "铣刀",
				"其它刀具和夹具", "锯片", "夹具和夹头", "车刀、切刀、铰刀", "插齿刀和剃齿刀", "刀带", "工装夹具",
				"滚刀", "拉刀", "螺纹刀具", "镗刀" });

		productSubType1.put("紧固件和连接件", new String[] { "组合件和连接副件", "法兰", "螺母",
				"其它紧固件和连接件", "螺钉", "螺栓", "卡簧和挡圈", "螺柱", "铆钉", "销键" });

		productSubType1.put("密封材料和密封件", new String[] { "垫片", "盘根", "油封",
				"其它密封材料和密封件", "密封条", "垫圈", "水封", "机械密封件", "密封垫" });

		productSubType1.put("轴承附件",
				new String[] { "滚子", "紧定套", "其它轴承附属件", "轴承保持架" });

		productSubType1.put("车间设备", new String[] { "风淋室", "其它车间设备", "无尘车间" });

		productSubType1.put("铆接设备", new String[] { "液压铆钉机" });

		productSubType1.put("液压机械与元件", new String[] { "其它液压机械及组配件", "其它液压元件",
				"伺服阀", "液压泵", "液压缸", "液压管件", "液压机床", "液压接头", "液压马达", "液压试验机",
				"液压系统", "液压整机", "液压工程机械" });

		productSubType1.put("链条和传送设备", new String[] { "链条", "传送带", "传送配件", "输送机",
				"其它链条和传送设备", "传动链", "带轮", "加料机", "链轮", "联轴器", "排屑机", "启闭机",
				"提升机", "蜗杆", "胀套" });

		productSubType1.put("齿轮和变速装置", new String[] { "齿轮", "其它齿轮和变速装置", "减速器、减速机",
				"变速器、变速机", "齿轮箱" });

		productSubType1.put("发电设备", new String[] { "柴油发电机组", "燃气发电机组", "汽油发电机组",
				"发电机组配件", "其它发电机和发电机组", "太阳能发电机组", "风力发电机组" });

		productSubType1.put("工业皮带", new String[] { "工业传动带", "其它工业皮带", "网带" });

		productSubType1.put("清洗设备", new String[] { "洗地机", "高压清洗机", "工业洗衣机",
				"其它清洗设备", "抛丸清理机", "蒸汽清洗机", "超声波清洗设备", "工业吸尘设备", "加香机和清洗机",
				"清洗设备配附件", "扫地机", "商用洗碗机" });

		productSubType1.put("空气净化设备", new String[] { "除尘设备", "除尘设备", "配件废气处理成套设备",
				"废气吸附装置", "工业加湿器", "工业空气净化器", "空气净化成套设备", "其它空气净化设备", "酸雾净化器",
				"脱硫除尘设备", "尾气处理装置", "油烟净化设备" });

		productSubType1
				.put("污水处理设备", new String[] { "沉淀池", "曝气设备", "气浮设备",
						"其它污水处理设备", "污泥处理设备", "污水处理成套设备", "污水处理设备配件", "油水分离设备",
						"滗水器" });

		productSubType1.put("原水处理设备", new String[] { "除氧设备", "反渗透设备", "高纯水制取设备",
				"供水设备", "离子交换设备", "其它原水处理设备", "软化水设备", "泳池水处理设备", "饮用水处理设备" });

		productSubType1.put("空调制冷和通风设备", new String[] { "风机", "工业空调", "其它制冷和通风设备",
				"风管", "风机盘管", "风口", "风幕机", "风叶", "风机和排风设备配件", "工业风扇", "鼓风机",
				"离子风机" });

		productSubType1.put("消音降噪设备", new String[] { "工业噪声控制设备", "其它消音降噪设备", "消声室",
				"消音降噪设备配件" });

		productSubType1.put("节能设备", new String[] { "节电设备", "节煤设备", "节水设备", "节油设备",
				"其它节能设备" });

		productSubType1.put("锅炉熔炉", new String[] { "燃煤锅炉", "电热锅炉", "燃气锅炉", "燃油锅炉",
				"其它锅炉熔炉及配件", "锅炉配件", "炉排", "特种锅炉", "蒸汽发生器和蒸汽发生机" });

		productSubType1.put("传热设备", new String[] { "热交换设备", "加热设备", "其它加热和热交换设备",
				"传热设备配件", "冷凝器", "冷却器", "其它传热设备", "蒸发器", "阻火器" });

		productSubType1.put("焊接、切割设备", new String[] { "切割设备", "排焊机", "储能焊机", "点焊机",
				"电焊机", "电烙铁", "电阻焊机", "等离子焊机", "等离子切割机", "管焊机", "滚焊机", "焊管机",
				"焊接小车", "焊台", "焊锡机", "弧焊机", "回流焊机", "激光焊机", "螺柱焊机", "摩擦焊机",
				"碰焊机", "钎焊机", "其他焊接、切割设备", "水焊机", "塑焊机", "压焊机" });

		productSubType1.put("焊接、切割材料和附件", new String[] { "其它焊接材料及附件", "焊条", "焊丝",
				"电焊钳", "焊粉", "焊膏", "焊炬和割炬", "焊剂", "焊片", "焊枪", "焊头", "烙铁咀",
				"烙铁头", "助焊笔" });

		productSubType1.put("过滤设备", new String[] { "滤芯", "滤油机", "其它净化过滤设备及配件",
				"过滤机", "过滤器", "滤清器", "压滤设备" });

		productSubType1.put("干燥设备", new String[] { "除湿机", "带式干燥设备", "沸腾干燥机",
				"滚筒刮板干燥机", "干燥设备配件", "回转滚筒干燥设备", "空心桨叶干燥机", "流化床干燥设备", "盘式干燥机",
				"喷雾干燥机", "气流干燥设备", "其它干燥设备", "热风炉", "闪蒸干燥机", "微波干燥设备",
				"箱式干燥设备", "真空干燥机", "制粒干燥设备" });

		productSubType1.put("制冷设备", new String[] { "冷冻机", "冷却塔", "冷水机", "其它制冷设备",
				"制冷压缩机" });

		productSubType1.put("储运设备", new String[] { "储罐", "储运容器", "瓶体", "其它储运设备",
				"食品储运设备", "箱体" });

		productSubType1.put("焊接辅机", new String[] { "焊接变位机", "焊接操作机", "焊接滚轮架" });

		productSubType1.put("过滤材料", new String[] { "过滤棉", "滤板", "滤布", "滤袋", "滤料",
				"滤膜", "滤片", "滤筒", "滤网", "滤纸", "其它过滤材料" });

		productSubType1.put("传质设备", new String[] { "其它传质设备", "填料塔" });

		productSubType1.put("分离设备", new String[] { "除沫器", "萃取设备", "空分设备", "其它分离设备",
				"蒸馏设备" });

		productSubType1.put("离合器", new String[] { "磁粉离合器", "电磁离合器", "气动离合器" });

		productSubType1.put("整熨洗涤设备", new String[] { "其它整熨洗涤设备", "洗涤设备和烘干设备",
				"整熨设备" });

		productSubType1.put("冶炼设备", new String[] { "焦化设备", "炼钢设备", "炼铁设备", "耐材及炉窑",
				"切断设备", "其它冶炼设备", "冶炼成套设备", "冶炼设备配件" });

		productSubType1.put("铸造及热处理设备", new String[] { "工业炉", "其它铸造及热处理设备", "燃烧器",
				"燃烧器配件", "中频电源", "铸造设备" });
		
		
		
		productSubType2
				.put("农业机械", new String[] { "农业工具", "耕整机械", "作物收获机械", "畜牧业机械",
						"粮食加工机械", "其它农业机械", "播种和施肥机械", "捕鱼机", "场上作业机械",
						"肥料加工设备", "林业机械", "农机配件", "农业实验设备", "排灌机械", "喷雾器",
						"劈木机", "饲料加工设备", "松土机", "", "兽用器械", "食用油加工设备", "屠宰设备",
						"植保机械", "抓草机" });

		productSubType2.put("食品、饮料加工机械", new String[] { "饮料加工机械", "饼干机械",
				"保鲜冷藏设备", "炊事设备", "豆制品加工机械", "果蔬加工机械", "罐头食品加工机械", "冷冻食品加工机械",
				"冷饮机械", "米面机械", "酿酒机械", "其他食品、饮料加工机械", "乳品机械", "肉制品加工机械",
				"食品包装机械", "食品烘焙设备", "食品杀菌机食品、饮料生产线糖果机械", "调味品加工机械", "休闲食品加工机械",
				"饮食加工机械配附件" });

		productSubType2.put("制版与印刷机械", new String[] { "凹版印刷机", "胶印机",
				"其他制版与印刷机械", "热转印机", "柔印机丝印机", "数码印刷机", "移印机", "制版机" });

		productSubType2.put("印前处理机械", new String[] { "绷网机", "打样机", "光绘机",
				"其它印前处理机械", "晒版机" });

		productSubType2.put("印后加工机械", new String[] { "复合机", "覆膜机", "横切机",
				"胶装机", "开槽机", "模切机", "配页机", "其它印后加工机械", "上光机", "烫金机", "压痕机",
				"压平机", "压纹机", "印刷检测仪器" });

		productSubType2.put("",
				new String[] { "捆扎机", "充填机", "喷码机", "其它包装机械", "封口机", "包装辅助设备",
						"包装机械配附件", "包装生产线", "成型机", "多功能包装机", "打字机和刻字机",
						"灌装机裹包机", "清洗机", "热熔胶机", "热收缩包装机", "杀菌机和干燥机", "贴标机" });

		productSubType2.put("制袋机", new String[] { "其它制袋机", "塑料制袋机" });

		productSubType2.put("纺织机械和部件", new String[] { "编织机", "纺机配件", "纺纱机",
				"纺织器材", "纺织辅助设备", "纺织配套电气仪表设备", "非织造布机械", "化纤机械", "络筒并捻机械",
				"棉麻毛初加工机械", "其它纺织机械", "和部件染整机针织机", "织造机械", "裁剪机械", "缝前设备",
				"缝纫机械", "缝中设备", "服装加工辅助设备", "服装加工设备零部件", "其它服装及附件加工机械", "熨烫机械",
				"" });

		productSubType2.put("皮革加工机械", new String[] { "裁断机", "冲孔机", "皮革加工设备配件",
				"片皮机", "其它皮革加工机械" });

		productSubType2.put("制鞋机械", new String[] { "钉跟机", "定型机", "缝鞋机", "后帮机",
				"前帮机", "其它制鞋机械", "上胶机", "鞋成型机", "鞋机配件", "鞋修饰机", "鞋眼机", "修鞋设备",
				"压底机", "压合机" });

		productSubType2.put("工程与建筑机械", new String[] { "混凝土机械", "铲土运输机械",
				"挖掘机械", "其它工程与建筑机械", "路面机械", "打桩机", "钢筋和预应力机械", "工程机械配件",
				"高空作业机械", "混凝土搅拌机", "混凝土泵车", "抹光机", "平地机", "市政和环境卫生机械", "摊铺机",
				"推土机", "压实机", "凿岩机械", "装修机械", "装载机械" });

		productSubType2.put("起重设备", new String[] { "手拉葫芦", "起重器", "电动葫芦",
				"起重机械", "千斤顶", "起重滑车", "其它起重设备", "吊具", "绞车" });

		productSubType2.put("塑料加工机械", new String[] { "吸塑机", "挤出机", "吹膜机",
				"发泡设备", "注塑机", "其它塑料加工机械", "造粒机", "吹塑机", "加料再生破碎机塑", "料板材机械",
				"塑料管材机械", "塑机辅机", "塑机配件", "塑料成型机", "压延机" });

		productSubType2.put("橡胶加工机械", new String[] { "混炼机", "炼胶机", "硫化罐切胶机",
				"其它橡胶加工机械", "脱硫机", "橡胶裁断机", "橡胶成型机", "橡胶定型机", "橡胶挤出机", "橡胶接头机",
				"橡胶硫化机", "橡胶破碎机" });

		productSubType2.put("破碎和分选机械", new String[] { "破碎机", "分选、筛选机械", "重选机械",
				"磁选机械", "分级机械", "粉碎机", "粉碎机械配件", "浮选机械", "开采、选矿机械配件", "离心机",
				"球磨机", "其它分选、筛选机械", "砂磨机", "水力选矿机械", "研磨机械" });

		productSubType2.put("雕刻蚀刻机械", new String[] { "雕刻机", "蚀刻机" });

		productSubType2.put("机床", new String[] { "折弯设备", "镗床", "钻床", "磨床",
				"车床", "加工中心", "铣床", "特种加工机床", "机床配件及附件", "锯床", "冲床", "齿轮加工机床",
				"电火花线切割机", "锻压机床", "进口机床", "卷板机床", "螺纹加工机床", "木工机床", "刨床和插床",
				"数控机床", "专用机床", "铸造机床", "组合机床" });

		productSubType2.put("机床附件", new String[] { "导轨", "顶尖或顶针", "导柱和导套分",
				"度盘或分度头", "工作台", "机床灯具", "机床垫铁", "机床刀架", "机床护罩", "机床丝杆",
				"机床主轴冷却管", "其它机床附件", "手轮", "拖链", "通用配件", "吸盘" });

		productSubType2.put("电子电气产品制造机械", new String[] { "剥线机", "插件机", "插片机",
				"点胶机", "端子机", "电子电器生产线", "电子元件成型机", "电子制造设备配附件", "剪脚机", "铆接机",
				"其它电子电气产品制造设备", "热压机", "熔接机", "绕线机", "或绞线机", "跳线机", "贴片机",
				"压接机", "振动盘" });

		productSubType2.put("喷涂设备", new String[] { "喷浆设备", "喷枪喷砂机", "喷涂机",
				"其他喷涂设备" });

		productSubType2.put("涂装设备", new String[] { "电镀设备", "电泳设备", "烘干固化设备",
				"静电发生设备", "前处理设备", "其它涂装设备", "涂布机", "涂装机", "涂装配件", "涂装除尘设备",
				"涂装生产线" });

		productSubType2.put("混合机械", new String[] { "分散机", "混合机械配件", "混合机",
				"均质设备", "捏合机", "其它混合机械", "乳化机" });

		productSubType2.put("反应设备", new String[] { "反应釜", "反应设备配件", "管式反应器",
				"其它反应设备", "塔式反应器" });

		productSubType2.put("纸加工机械", new String[] { "层压机", "打孔机", "分切机", "分纸机",
				"复卷机", "磨浆机", "切纸机", "其它纸加工机械", "压花机", "纸成型机械", "折纸机", "纸板机",
				"纸杯机", "纸袋机", "纸管机" });

		productSubType2.put("金属加工机械", new String[] { "金属成型机械", "金属雕刻机",
				"金属锻造机械", "金属加工机械", "部件金属矫直机", "金属拉丝机", "金属涂装机械", "金属旋压机",
				"金属铸造机械", "其他金属加工机械" });

		productSubType2.put("玻璃陶瓷加工设备", new String[] { "玻璃磨边机", "玻璃切割机",
				"玻璃清洗干燥机", "玻璃钻孔机", "其他玻璃陶瓷加工设备", "陶瓷抛光机", "陶瓷切割机", "中空玻璃设备",
				"木工机械", "造纸设备及配件" });

		productSubType2.put("采矿机械", new String[] { "爆破设备", "采掘设备", "矿用提升设备",
				"矿业装卸设备", "其他采矿机械及配件", "冶金机械", "石油机械" });

		productSubType2.put("制药机械", new String[] { "包衣机", "胶囊充填机", "其它制药机械",
				"压片机", "药品包装机", "药用粉碎机械", "制丸机" });

		productSubType2.put("模具", new String[] { "压铸、锻造模具", "经济模具", "玻璃制品模具",
				"其它模具", "塑料成型模具", "粉末冶金模具", "冲压模具", "橡胶成型模具" });

		productSubType2.put("机械五金加工", new String[] { "铸造和锻压", "钣金加工", "焊接加工",
				"激光加工", "零件加工", "模具加工", "喷涂加工", "切割加工", "其他形式加工" });
		
		
		productSubType3.put("手动工具", new String[] { "刷子", "其它手动工具", "钳子", "螺丝刀",
				"扳手", "锤子", "锉刀", "斧子", "镊子", "撬棍或起钉器", "气筒", "手动黄油枪", "丝锥和板牙",
				"丝锥板牙套装", "凿" });

		productSubType3.put("锯", new String[] { "锯条", "链锯", "其它锯", "手锯、木工锯",
				"油锯" });

		productSubType3.put("气动工具", new String[] { "气动打钉（枪）机", "气动工具配件",
				"气动拉铆（枪）机", "气动吹尘枪", "气动捣固机", "气动打磨机", "气动黄油枪", "气动胶枪",
				"气动螺丝刀", "气动铆钉枪", "气动扳手", "气动铲", "气动锤", "气动剪刀", "气动钻", "气动抛光机",
				"其它气动工具" });

		productSubType3.put("电动工具", new String[] { "电动工具配件", "电动抛光机", "电锤",
				"电动倒角机", "电动雕刻机", "电动角磨机", "电动磨光机", "电动扳手", "电动坡口机", "电动砂带机",
				"电动砂光机", "电镐", "电剪刀", "电锯", "电刨", "电钻", "工业吸尘器", "其它电动工具",
				"热风枪", "型材切割机" });

		productSubType3.put("维护工具", new String[] { "组合工具", "电讯组合工具", "机修组合工具",
				"家用组合工具", "工具柜", "金刚石工具", "防爆工具", "液压工具" });

		productSubType3.put("磨具", new String[] { "砂轮", "其它磨具", "钢丝轮",
				"工业百洁布和擦拭布", "磨块", "磨片、切割片", "磨石、油石", "磨头", "抛光轮", "砂布", "砂带",
				"砂纸", "页轮和页片" });

		productSubType3.put("磨料", new String[] { "研磨剂", "抛光膏", "其它磨料", "人造磨料",
				"天然磨料" });

		productSubType3.put("五金配件", new String[] { "吊钩和抓钩", "斗齿", "钢珠和滚珠",
				"管夹", "滚筒", "滑轮", "脚轮和万向轮", "接头", "井盖", "卡箍或抱箍", "喷头",
				"其它五金配件", "托辊", "卸扣", "直通" });

		productSubType3.put("机械五金", new String[] { "液压元件", "其它机械五金" });

		productSubType3.put("索具", new String[] { "吊带", "吊装绳带", "花篮螺丝", "连接环",
				"其它索具", "起重钳", "起重链条", "收紧器", "套环", "旋转环" });

		productSubType3.put("弹簧", new String[] { "板弹簧", "碟形弹簧", "恒力弹簧", "拉伸弹簧",
				"扭转弹簧", "片弹簧", "气弹簧", "其它弹簧", "涡卷弹簧", "压缩弹簧", "异形弹簧" });

		productSubType3.put("气动元件", new String[] { "气动接头", "气动马达", "气动阀",
				"气动软管", "气缸", "其它气动元件", "气源处理器", "真空发生器", "电子五金材料", "工艺礼品五金",
				"服饰箱包五金", "五金配件包装" });

		productSubType3.put("日用五金", new String[] { "其它刀", "其它日用五金制品", "剪",
				"多功能野营刀具", "雕刻刀", "美工刀", "折刀" });

		productSubType3.put("气焊或气割器材", new String[] { "气瓶", "其它气焊或气割器材" });

		
		
		productSubType4.put("气体液体计量仪表", new String[] { "流量计", "燃气表液位计",
				"其它气体液体计量仪表", "压力表", "温度计", "水表", "风速计", "检定装置", "节流装置",
				"流量变送器" });

		productSubType4.put("温湿度仪表", new String[] { "非接触式温度计", "红外测温仪",
				"其它温湿度仪表", "热像仪", "双金属温度计", "温度校验仪表", "温湿度计", "温湿度变送器",
				"温湿度控制（调节）器", "压力式温度计" });

		productSubType4.put("气象仪器", new String[] { "风量计", "风速风向仪", "其它气象仪器",
				"雨量计", "自动气象站" });

		productSubType4.put("量具量仪", new String[] { "量规", "V型架", "百分表", "测高仪",
				"带表卡尺", "电子尺", "对弧样板", "方箱", "高度计和高度尺", "花岗岩量具", "角尺", "角度尺",
				"卷尺", "卡规", "偏摆检查仪", "平板", "千分表", "千分尺", "气动量仪", "其它量具量仪",
				"塞尺", "深度尺", "水平尺", "数显卡尺", "三坐标测量机", "影像仪", "游标卡尺", "圆度仪" });

		productSubType4.put("计量标准器具",
				new String[] { "电磁学计量标准器具", "电离辐射计量标准器具", "化学计量标准器具",
						"力学计量标准器具", "其它计量标准器具", "热学计", "标准器具", "时间频率计量标准器具" });

		productSubType4.put("机械量仪表", new String[] { "测力仪", "表其它机", "械量仪",
				"表速度测量仪", "表转矩量仪", "转速计" });

		productSubType4
				.put("实验室器具", new String[] { "剂量仪", "器其它化学器具", "比重计", "滴定管",
						"恒温器", "教学仪器", "量筒和量杯", "培养皿", "其它实验仪", "器装置", "烧杯",
						"烧瓶", "试管", "试剂瓶", "水浴锅", "实验室水箱和水槽", "天平仪器", "移液器",
						"真空测量仪器" });

		productSubType4.put("光学透镜和仪器", new String[] { "透镜和棱镜", "滤光片和滤色片",
				"放大镜", "显微镜", "目镜和物镜", "其它光学透镜和仪器", "光谱仪和光度计", "望远镜", "分光仪",
				"干涉仪", "工业扫描仪", "工业相机", "光学检测仪", "光栅", "光学机具及配件", "激光测距仪",
				"熔点仪", "色差计", "投影仪", "夜视仪", "照度计", "折射仪", "紫外辐照计" });

		productSubType4.put("分析仪器", new String[] { "比表面分析仪", "色谱、能谱仪",
				"器元素分析仪器", "其它分析仪器", "样品处理", "粘度计", "、密度计", "采样器电导仪", "器电泳仪",
				"滴定仪", "定硫仪", "量热仪", "粒度仪", "浓度计", "PH计", "溶氧仪", "燃烧效率分析仪",
				"噪音计", "水分测定仪", "水质分析仪", "碳硫分析仪", "浊度计", "紫外分析仪" });

		productSubType4.put("气体分析仪", new String[] { "二氧化氮检测仪", "二氧化硫检测仪",
				"二氧化碳检测仪", "酒精检测仪", "可燃性气体检测仪", "硫化氢检测仪", "氯化氢检测仪", "氯气检测仪",
				"氢气检测仪", "其它气体分析仪", "氧气检测仪", "一氧化氮检测仪", "一氧化碳检测仪" });

		productSubType4.put("色谱仪", new String[] { "进样器", "离子色谱仪", "其它色谱仪",
				"气相色谱仪", "色谱柱", "液相色谱" });

		productSubType4.put("试验机", new String[] { "硬度计", "包装件试验机", "材料试验机",
				"冲击试验机", "跌落试验机", "非金属材料试验机", "拉力试验机", "力与变形检测仪", "耐磨试验机",
				"扭转试验机", "平衡机", "疲劳试验机", "汽车试验设备", "强度试验机", "其它试验机", "熔融指数仪",
				"万能试验机", "弯曲试验机", "压力试验机", "振动试验机" });

		productSubType4.put("专用仪器仪表", new String[] { "通讯网络测试仪", "元器件测试仪",
				"环境测量", "安规测量", "安全仪器", "测定仪", "测距仪", "船用仪器仪表", "电火花检测仪",
				"纺织用仪", "器化工仪", "表静电测试仪", "监控仪", "沥青试验仪", "器其它专用仪器仪表", "水文仪器",
				"食品、药品安全检测仪", "器通讯检测仪器", "造纸检测仪器" });

		productSubType4.put("工程测绘仪器", new String[] { "测亩仪", "建筑检测仪", "激光水平仪",
				"经纬仪", "其它工程测绘仪器", "全站仪", "手持GPS定位仪", "水准仪" });

		productSubType4.put("自动化仪器设备",
				new String[] { "安全栅", "基地式仪", "表集中控制装置", "控制（调节）仪表", "气动单元组合仪",
						"表其它自动化仪表", "校验仪表", "自动化成套控制系统", "执行机构" });

		productSubType4.put("包装测试设备", new String[] { "耐破度试验机", "其它包装测试设备",
				"泄漏检测仪", "压缩试验机" });

		productSubType4.put("电子测量仪器", new String[] { "LCR测量仪", "参数测量仪", "场强仪",
				"频谱分析仪", "其它电子测量仪器", "信号发生器" });

		productSubType4.put("环境检测仪器", new String[] { "COD检测仪器", "ROHS检测仪器",
				"臭氧检测仪", "大气采样仪", "粉尘采样、检测仪器", "其它环境检测仪器", "土壤检测仪器", "在线监测仪" });

		productSubType4.put("生命科学仪器", new String[] { "超净工作台", "低温冰箱",
				"动植物实验仪器", "过滤及超滤仪器", "均质器", "扩增仪和PCR仪", "冷冻干燥机", "酶标仪和洗板机",
				"灭菌锅", "其它生命科学仪器", "生化分析仪", "微生物检测仪", "器细胞破碎仪", "血液及体液分析仪器",
				"摇床和振荡器" });

		productSubType4.put("压力仪表", new String[] { "差压表", "减压器", "其它压力仪表",
				"压力计", "压力控制器", "压力校验仪表" });

		productSubType4.put("橡塑专用仪器仪表", new String[] { "硫化仪", "其它橡塑专用仪器仪表" });

		productSubType4.put("室内环保检测仪器", new String[] { "VOC检测仪器", "甲醛检测仪器",
				"其它室内环保检测仪器", "射线检测仪器", "消毒机" });

		productSubType4.put("电工仪器仪表", new String[] { "电流表", "万用表", "示波器",
				"其它电工仪器仪表", "电能表", "信号源/频率计数", "电压表", "测电笔", "参数测试仪器", "电池测试仪",
				"电桥", "电阻表", "电缆测试仪", "功率表", "频率表", "钳形表" });

		productSubType4.put("定时器和计数器", new String[] { "工业计时器", "计数器", "定时器" });

		productSubType4.put("衡器", new String[] { "天平类", "皮带秤", "电子秤", "地上衡",
				"吊秤", "其它衡器", "台秤", "计价秤", "测力计", "地磅", "定量秤", "轨道衡", "配料秤" });

		productSubType4.put("试验箱及气候环境设备", new String[] { "环境试验箱", "培养箱",
				"其它试验箱", "电阻箱、表箱", "低温试验箱", "腐蚀试验箱", "干燥箱", "高低温箱", "高温试验箱",
				"恒温恒湿试验箱", "老化试验箱", "湿热试验箱", "盐雾试验箱" });

		productSubType4.put("无损检测仪器", new String[] { "测厚仪", "测振仪", "超声检测仪",
				"粗糙度仪", "检漏仪", "金属探测器", "内窥镜", "其它无损检测仪器", "探伤仪", "涂层检测仪",
				"磁力仪", "其它地矿、地震仪器" });

		productSubType4.put("物位仪表", new String[] { "玻璃板液位计", "磁翻板液位计",
				"超声波物位计", "电容物位计", "浮球液位控制器", "浮子液位计", "雷达物位计", "料位控制器",
				"其它物位仪表", "物位变送器", "液位变送器", "液位开关", "液位仪表" });
		
	}

	public static class Company {
		String name;
		String legal;
		String phone;
		String address;
		String link;
		public Company(){}
		
		List<Product> products = new ArrayList<Product>();
		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getLegal() {
			return legal;
		}

		public void setLegal(String legal) {
			this.legal = legal;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getLink() {
			return link;
		}

		public void setLink(String link) {
			this.link = link;
		}

		public List<Product> getProducts() {
			return products;
		}

		public void setProducts(List<Product> products) {
			this.products = products;
		}

	}
	
	public static class Product {
		String name;
		String link;
		String icon;
		public Product(){}
		
		public String getIcon() {
			return icon;
		}
		public void setIcon(String icon) {
			this.icon = icon;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLink() {
			return link;
		}
		public void setLink(String link) {
			this.link = link;
		}
	}
	
	public static class ProductDetail {
		String company;
		String type;
		String name;
		String link;
		String icon;
		double price;
		String details;
		String images;
		
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getLink() {
			return link;
		}
		public void setLink(String link) {
			this.link = link;
		}
		public String getIcon() {
			return icon;
		}
		public void setIcon(String icon) {
			this.icon = icon;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public String getDetails() {
			return details;
		}
		public void setDetails(String details) {
			this.details = details;
		}
		public String getImages() {
			return images;
		}
		public void setImages(String images) {
			this.images = images;
		}
	}
	
	
	private static final Logger logger = LoggerFactory
			.getLogger(ImageUtil.class);
	
	private static Map<String, Document> linkCache = new HashMap<String, Document>();
	
	private static List<String> companyNameList = new ArrayList<String>();
	
	private static List<String> failProductLinks = new ArrayList<String>();
	
	
	private static Document getDocument(String url){
		if (url == null || url.trim().length() == 0) {
			return Document.createShell(url);
		}
		if (linkCache.containsKey(url)) {
			return linkCache.get(url);
		}
		try {
			if (!url.startsWith("http")) {
				url = "http://cn.made-in-china.com" + url;
			}
			int sleepSecond = (int)((Math.random()*3) * 1000);
			if (sleepSecond == 0) { sleepSecond = 2000;}
			logger.info("Read URL("+(sleepSecond/1000)+"s): " + url);
			Document d = Jsoup.connect(url).header("User-Agent", UserAgent).get();
			linkCache.put(url, d);
			Thread.sleep(sleepSecond);
			return d;
		} catch (Exception e) {
			e.printStackTrace();
			return Document.createShell(url);
		}
	}
	
	public static void parseProductType() {
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		
		File file = new File("C:\\uimaster\\release\\made-in-china\\jsondata-机械制造行业.txt");
		String imageURL = "C:/uimaster/release/made-in-china/site/cn.made-in-china.com/sell/Manufacturing-Processing-Machinery.html";
		logger.info("parsing url: " + imageURL);
		try {
			BufferedWriter writer  = new BufferedWriter(new FileWriter(file,true)); 
			Document doc = Jsoup.parse(new File(imageURL), "GBK");
			Elements result = doc.select(".item-catalog");
			Iterator<Element> i = result.iterator();
			while (i.hasNext()) {
				Element e = i.next();
				Elements subresult = e.select("a");
				Iterator<Element> ii = subresult.iterator();
				while (ii.hasNext()) {
					Element ie = ii.next();
					logger.info("get link: " + ie.text() + "=" + ie.attr("href") );
					try {
						if (!parseProduct(writer, getDocument(ie.attr("href")))) {
							failProductLinks.add(ie.attr("href"));
						}
					} catch (Exception e0) {
						e0.printStackTrace();
					}
				}
			}
			
			result = doc.select("#catlist");
			i = result.iterator();
			if (i.hasNext()) {
				Elements links = i.next().select("a");
				Iterator<Element> link = links.iterator();
				while (link.hasNext()) {
					Element ie = link.next();
					logger.info("get link: " + ie.text() + "=" + ie.attr("href") );
					try {
						if (!parseProduct(writer, getDocument(ie.attr("href")))) {
							failProductLinks.add(ie.attr("href"));
						}
					} catch (Exception e0) {
						e0.printStackTrace();
					}
				}
			}
			
			// retry again.
			linkCache.clear();
			for (String product: failProductLinks) {
				parseProduct(writer, getDocument(product));
			}
			
			writer.close();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public static boolean parseProduct(BufferedWriter writer, Document doc) throws Exception {
		Elements result = doc.select(".lst-tab");
		Iterator<Element> i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			//公司信息
			String link = e.child(1).child(0).attr("href");
			link = "http://cn.made-in-china.com" + link;
			logger.info("公司信息选项=" + link );
			Document companyTab = getDocument(link);
			
			int total = 0;
			Elements totalItems = companyTab.select(".lst-lead-node");
			Iterator<Element> i0 = totalItems.iterator();
			if (i0.hasNext()) {
				String value = i0.next().child(0).text();
				total = Integer.valueOf(value);
			}
			int pages = total/40;
			if (pages > 100) {
				pages = 100;// read max pages
			}
			parseCompany(writer, companyTab);
			for (int p=2; p < pages; p++) {
				String newLink = link;
				newLink = newLink.replace("1.html", p+".html");
				parseCompany(writer, getDocument(newLink));
			}
			return true;
		}
		return false;
	}
	
	public static boolean exitFlag = true;
	public static int itemCounter = 0;
	public static void parseCompany(BufferedWriter writer, Document doc) throws Exception {
	    
		Elements result = doc.select(".co-item");
		Iterator<Element> i = result.iterator();
		while (i.hasNext()) {
			Element e = i.next();
			Element coname = e.select(".co-name").iterator().next().child(1);
			String companyName = coname.text();
			if (companyNameList.contains(companyName)) {
				System.out.println("已扫描： " + companyName);
				continue;
			}
			companyNameList.add(companyName);
			
			// break points
			if (exitFlag && !"苏州圆球包装有限公司".equals(companyName)) {
				continue;
			}
			exitFlag = false;
			
			Document companyMainDoc = getDocument(coname.attr("href"));
			Elements customerInfo = companyMainDoc.select(".cert-info");
			if (customerInfo.size() == 0) {
				continue;
			}
			//公司名称
			Company companyObject = new Company();
			companyObject.setName(companyName);
			logger.info("公司名称=" + companyName);
			
			if (companyMainDoc.select(".contactInfo").size() > 0) {
				// Company info.
				companyObject.setLink(coname.attr("href"));
				result = companyMainDoc.select(".contactInfo");
				i = result.iterator();
				if (i.hasNext()) {
					Element e0 = i.next();
					int size = e0.children().size();
					for (int j=0; j < size; j++) {
						Element child = e0.child(j);
						String attr = child.text();
						if (j == 0) {
							companyObject.setLegal(attr);
						}
						if (attr.startsWith("手机")) {
							String phone = child.child(0).text();
							companyObject.setPhone(phone);
						} else if (attr.startsWith("地址")) {
							String address = attr;
							address = address.replace("&nbsp;", "").replace("地址：", "");
							companyObject.setAddress(address.trim());
						}
					}
				}
				
				// Product
				result = companyMainDoc.select(".top_nav");
				i = result.iterator();
				if (i.hasNext()) {
					Element e0 = i.next();
					int size = e0.children().size();
					for (int j=0; j < size; j++) {
						String name = e0.child(j).child(0).text();
						if ("供应产品".equals(name)) {
							Document compProductDoc = getDocument(e0.child(j).attr("href"));
							Elements presult = compProductDoc.select(".proitem");
							Iterator<Element> pi = presult.iterator();
							while (pi.hasNext()) {
								Element a = pi.next().child(1).child(0).child(0);
								//logger.info("产品: " + a.text() + "=" + a.attr("href"));
								Product productObject = new Product(); 
								productObject.setName(a.text());
								productObject.setLink(a.attr("href"));
								companyObject.getProducts().add(productObject);
							}
							break;
						}
					}
				}
				
				JSONObject json = new JSONObject(companyObject);
				logger.info((++itemCounter)+ "json: " + json.toString());
				String line = json.toString();  
		        writer.write(line);  
		        writer.write("\n");
			    writer.flush();  
			} else {
				// Company info.
				Iterator<Element> i0 = customerInfo.iterator();
				if (i0.hasNext()) {
					String k = i0.next().child(1).child(0).attr("href");
					companyObject.setLink(k);
					parseCompanyContactInfo(companyObject, getDocument(k));
				}
				
				// Company product.
				Elements presult = companyMainDoc.select(".proName");
				Iterator<Element> pi = presult.iterator();
				while (pi.hasNext()) {
					Element a = pi.next().child(0);
					//logger.info("产品: " + a.text() + "=" + a.attr("href"));
					Product productObject = new Product(); 
					productObject.setName(a.text());
					productObject.setLink(a.attr("href"));
					companyObject.getProducts().add(productObject);
				}
				JSONObject json = new JSONObject(companyObject);
				logger.info((++itemCounter)+ "json: " + json.toString());
				String line = json.toString();  
		        writer.write(line);  
		        writer.write("\n");
			    writer.flush();  
			}
		}
	}
	
	public static void parseCompanyContactInfo(Company companyObject, Document doc) {
		Elements result = doc.select(".card-name");
		Iterator<Element> i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			//公司名称
			companyObject.setLegal(e.text());
		}
		
		result = doc.select(".card-info-bd");
		i = result.iterator();
		if (i.hasNext()) {
			Element e = i.next();
			int size = e.children().size();
			for (int j=0; j < size; j++) {
				Element child = e.child(j);
				String attr = child.child(0).text();
				if (attr.startsWith("手机")) {
					String phone = child.child(1).child(0).text();
					companyObject.setPhone(phone);
				} else if (attr.startsWith("电话") && companyObject.getPhone() == null) {
					String phone = child.child(1).child(0).text();
					companyObject.setPhone(phone);
				} else if (attr.startsWith("地址")) {
					String address = child.child(1).html();
					address = address.replace("&nbsp;", "");
					companyObject.setAddress(address.trim());
				}
			}
		}
	}
	
	
	public static void parseProductDetail() {
//		System.setProperty("http.proxyHost", "web-proxy.cup.hp.com");
//		System.setProperty("http.proxyPort", "8080");
		
		itemCounter = 29679;
		String productType = "jsondata-机械制造行业";
		File file = new File("C:\\uimaster\\release\\made-in-china\\"+productType+".txt");
		File productFile = new File("C:\\uimaster\\release\\made-in-china\\productdetail-机械制造行业.txt");
		logger.info("parsing file: " + file);
		try {
			BufferedWriter writer  = new BufferedWriter(new FileWriter(productFile,true)); 
			BufferedReader br= new BufferedReader(new FileReader(file));
			String line = null;
			while((line = br.readLine())!=null){
				JSONObject object = new JSONObject(line);
				JSONArray products = object.getJSONArray("products");
				for (int i=0; i<products.length(); i ++) {
					ProductDetail productObject = new ProductDetail(); 
					productObject.setCompany(object.getString("name"));
					JSONObject item = products.getJSONObject(i);
					productObject.setName(item.getString("name").replace("...", ""));
					productObject.setLink(item.getString("link"));
					productObject.setType("机械制造行业");
					
					if (companyNameList.contains(productObject.getLink())) {
						continue;
					}
					companyNameList.add(productObject.getLink());
					
					// break point
					if (exitFlag && !productObject.getCompany().startsWith("汕头市腾捷机电科技有限公司")) {
						continue;
					}
					exitFlag = false;
//					
					Document doc = getDocument(productObject.getLink());
					
					Elements result = doc.select(".proDetail_box");
					Iterator<Element> ii = result.iterator();
					if (ii.hasNext()) {
						Element e = ii.next().child(1);
						StringBuffer sb = new StringBuffer();
						sb.append("<HTML>\n<HEAD>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
						sb.append("<link href=\"/uimaster/product/product.css\" rel=\"stylesheet\" type=\"text/css\">\n</HEAD>\n<BODY>\n");
						sb.append(e.html());
						sb.append("\n</BODY></HTML>");
						FileUtil.write("C:\\uimaster\\release\\made-in-china\\"+productType+"\\product\\uimaster\\mm"+(++itemCounter), "desc.html", sb.toString());
						productObject.setDetails("/product/uimaster/mm"+(itemCounter)+"/desc.html");
					} else {
						itemCounter ++ ;
					}
					
					result = doc.select(".prices");
					ii = result.iterator();
					if (ii.hasNext()) {
						String strPrice = ii.next().child(0).child(1).child(1).text();
						try {
						productObject.setPrice(Double.valueOf(strPrice));
						} catch (Exception ee) {}
					}
					
					String relativeImagePath = "/product/uimaster/mm"+(itemCounter)+"/images";
					productObject.setImages(relativeImagePath);
					result = doc.select(".mImgs");
					ii = result.iterator();
					if (ii.hasNext()) {
						Element tr = ii.next().child(0).child(0).child(0);
						int size = tr.children().size();
						for (int j=0; j < size; j++) {
							try {
								Element td = tr.child(j);
								if (!td.hasAttr("rel")) {continue;}
								JSONObject tdItem = new JSONObject(td.attr("rel"));
								String url = tdItem.getString("largeimage");
								String fileName = url.substring(url.lastIndexOf('/') + 1);
								if (fileName.length() > 50) {
									fileName = fileName.substring(fileName.length() - 20);
								}
								File saveFile = new File("C:\\uimaster\\release\\made-in-china\\"+ productType + relativeImagePath);
								if (!saveFile.exists()) {saveFile.mkdirs();}
								ImageUtil.downloadImage(url, saveFile, fileName);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					} else {
						result = doc.select(".detailPhoto");
						ii = result.iterator();
						if (ii.hasNext()) {
							try {
								String url = ii.next().child(0).child(0).child(0).child(0).child(0).attr("data-url");
								String fileName = url.substring(url.lastIndexOf('/') + 1);
								if (fileName.length() > 50) {
									fileName = fileName.substring(fileName.length() - 20);
								}
								File saveFile = new File("C:\\uimaster\\release\\made-in-china\\"+ productType + relativeImagePath);
								if (!saveFile.exists()) {saveFile.mkdirs();}
								ImageUtil.downloadImage(url, saveFile, fileName);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
					
					JSONObject json = new JSONObject(productObject);
					logger.info(itemCounter+ "json: " + json.toString());
			        writer.write(json.toString());  
			        writer.write("\n");
				    writer.flush();  
				}
			}
			br.close();
			writer.close();
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public static void main(String[] argus) {
		try {
			ProductTypeDefinition.parseProductDetail();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

}
