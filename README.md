# yys_tool_ckmnq_back
抽卡模拟器的后端
瞎写的，凑合凑合用得了

# 数据库
自己运行一下sql

-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: yys_gods
-- ------------------------------------------------------
-- Server version	5.7.40-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gods`
--

DROP TABLE IF EXISTS `gods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shishen_id` int(11) NOT NULL,
  `sort` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `in_card_pool` tinyint(1) NOT NULL,
  `level` varchar(100) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=439 DEFAULT CHARSET=utf8 COMMENT='式神表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gods`
--

LOCK TABLES `gods` WRITE;
/*!40000 ALTER TABLE `gods` DISABLE KEYS */;
INSERT INTO `gods` VALUES (202,200,0,'桃花妖',1,'SR'),(203,201,1,'雪女',1,'SR'),(204,202,2,'三尾狐',1,'R'),(205,203,3,'灯笼鬼',1,'N'),(206,205,4,'座敷童子',1,'R'),(207,206,5,'鲤鱼精',1,'R'),(208,207,6,'九命猫',1,'R'),(209,208,7,'狸猫',1,'R'),(210,209,8,'河童',1,'R'),(211,210,9,'鬼使白',1,'SR'),(212,211,10,'鬼使黑',1,'SR'),(213,212,11,'童男',1,'R'),(214,213,12,'童女',1,'R'),(215,214,13,'饿鬼',1,'R'),(216,215,14,'孟婆',1,'SR'),(217,216,15,'巫蛊师',1,'R'),(218,217,16,'大天狗',1,'SSR'),(219,218,17,'鸦天狗',1,'R'),(220,219,18,'酒吞童子',1,'SSR'),(221,220,19,'犬神',1,'SR'),(222,221,20,'食发鬼',1,'R'),(223,222,21,'武士之灵',1,'R'),(224,223,22,'骨女',1,'SR'),(225,224,23,'雨女',1,'R'),(226,225,24,'跳跳弟弟',1,'R'),(227,226,25,'跳跳妹妹',1,'R'),(228,227,26,'兵俑',1,'R'),(229,228,27,'丑时之女',1,'R'),(230,230,28,'独眼小僧',1,'R'),(231,231,29,'鬼女红叶',1,'SR'),(232,232,30,'铁鼠',1,'R'),(233,233,31,'跳跳哥哥',1,'SR'),(234,234,32,'椒图',1,'R'),(235,236,33,'管狐',1,'R'),(236,237,34,'山兔',1,'R'),(237,238,35,'萤草',1,'R'),(238,242,37,'傀儡师',1,'SR'),(239,243,38,'山童',1,'R'),(240,248,43,'荒川之主',1,'SSR'),(241,249,44,'觉',1,'R'),(242,250,45,'青蛙瓷器',1,'R'),(243,251,46,'判官',1,'SR'),(244,252,47,'凤凰火',1,'SR'),(245,253,48,'吸血姬',1,'SR'),(246,254,49,'妖狐',1,'SR'),(247,255,50,'阎魔',1,'SSR'),(248,256,51,'妖琴师',1,'SR'),(249,257,52,'食梦貘',1,'SR'),(250,258,53,'两面佛',0,'SSR'),(251,259,54,'小鹿男',1,'SSR'),(252,260,55,'清姬',1,'SR'),(253,261,56,'镰鼬',1,'SR'),(254,262,57,'姑获鸟',1,'SR'),(255,263,58,'二口女',1,'SR'),(256,264,59,'白狼',1,'SR'),(257,265,60,'茨木童子',1,'SSR'),(258,266,61,'青行灯',1,'SSR'),(259,267,62,'樱花妖',1,'SR'),(260,268,63,'惠比寿',1,'SR'),(261,269,64,'妖刀姬',1,'SSR'),(262,270,65,'络新妇',1,'SR'),(263,271,66,'般若',1,'SR'),(264,272,67,'一目连',1,'SSR'),(265,273,68,'青坊主',1,'SR'),(266,274,69,'古笼火',1,'R'),(267,275,70,'万年竹',0,'SR'),(268,276,71,'夜叉',1,'SR'),(269,280,75,'辉夜姬',1,'SSR'),(270,281,76,'烟烟罗',1,'SR'),(271,282,77,'金鱼姬',1,'SR'),(272,283,78,'荒',1,'SSR'),(273,285,79,'鸩',1,'SR'),(274,286,80,'以津真天',1,'SR'),(275,287,81,'匣中少女',1,'SR'),(276,288,82,'彼岸花',1,'SSR'),(277,289,83,'兔丸',0,'R'),(278,290,84,'小松丸',1,'SR'),(279,291,85,'书翁',1,'SR'),(280,292,86,'雪童子',1,'SSR'),(281,293,87,'百目鬼',1,'SR'),(282,294,88,'奴良陆生',0,'SSR'),(283,295,89,'追月神',1,'SR'),(284,296,90,'山风',1,'SSR'),(285,297,91,'日和坊',1,'SR'),(286,298,92,'薰',1,'SR'),(287,310,103,'蜜桃&芥子',0,'R'),(288,311,104,'面灵气',1,'SSR'),(289,312,105,'鬼切',1,'SSR'),(290,313,106,'犬夜叉',0,'SSR'),(291,314,107,'杀生丸',0,'SSR'),(292,315,108,'少羽大天狗',1,'SP'),(293,316,109,'白藏主',1,'SSR'),(294,317,110,'人面树',0,'SR'),(295,318,111,'於菊虫',1,'SR'),(296,319,112,'桔梗',0,'SSR'),(297,320,113,'一反木绵',1,'SR'),(298,321,114,'入殓师',1,'SR'),(299,322,115,'炼狱茨木童子',1,'SP'),(300,323,116,'天井下',0,'R'),(301,324,117,'化鲸',1,'SR'),(302,325,118,'八岐大蛇',1,'SSR'),(303,326,119,'稻荷神御馔津',1,'SP'),(304,327,120,'苍风一目连',1,'SP'),(305,328,121,'赤影妖刀姬',1,'SP'),(306,329,122,'海忍',0,'SR'),(307,330,123,'不知火',1,'SSR'),(308,331,124,'御怨般若',1,'SP'),(309,332,125,'久次良',1,'SR'),(310,333,126,'大岳丸',1,'SSR'),(311,334,127,'骁浪荒川之主',1,'SP'),(312,335,128,'蟹姬',1,'SR'),(313,336,129,'朽木露琪亚',0,'SR'),(314,337,130,'黑崎一护',0,'SSR'),(315,338,131,'泷夜叉姬',1,'SSR'),(316,339,132,'烬天玉藻前',1,'SP'),(317,340,133,'纸舞',1,'SR'),(318,341,134,'鬼王酒吞童子',1,'SP'),(319,342,135,'星熊童子',1,'SR'),(320,343,136,'天剑韧心鬼切',1,'SP'),(321,344,137,'云外镜',1,'SSR'),(322,345,138,'鬼童丸',1,'SSR'),(323,346,139,'聆海金鱼姬',1,'SP'),(324,347,140,'缘结神',1,'SSR'),(325,348,141,'浮世青行灯',1,'SP'),(326,349,142,'风狸',1,'SR'),(327,350,143,'蝎女',1,'SR'),(328,351,144,'铃鹿御前',1,'SSR'),(329,352,145,'缚骨清姬',1,'SP'),(330,353,146,'紧那罗',1,'SSR'),(331,354,147,'待宵姑获鸟',1,'SP'),(332,355,148,'麓铭大岳丸',1,'SP'),(333,356,149,'千姬',1,'SSR'),(334,357,150,'初翎山风',1,'SP'),(335,358,151,'夜溟彼岸花',1,'SP'),(336,359,152,'灶门炭治郎',0,'SSR'),(337,370,163,'饭笥',1,'SSR'),(338,371,164,'川猿',1,'SR'),(339,372,165,'因幡辉夜姬',1,'SP'),(340,373,166,'夜刀神',0,'SSR'),(341,375,167,'影鳄',0,'R'),(342,376,168,'铃彦姬',1,'SSR'),(343,377,169,'梦寻山兔',1,'SP'),(344,378,170,'迦楼罗',1,'SR'),(345,379,171,'不见岳',1,'SSR'),(346,382,172,'灵海蝶',1,'SR'),(347,383,173,'神堕八岐大蛇',1,'SP'),(348,384,174,'粉婆婆',1,'SR'),(349,385,175,'大夜摩天阎魔',1,'SP'),(350,386,176,'我妻善逸',0,'SSR'),(351,387,177,'嘴平伊之助',0,'SSR'),(352,388,178,'心狩鬼女红叶',1,'SP'),(353,389,179,'须佐之男',1,'SSR'),(354,390,180,'神启荒',1,'SP'),(355,391,181,'寻香行',1,'SSR'),(356,392,182,'季',1,'SSR'),(357,393,183,'禅心云外镜',1,'SP'),(358,394,184,'月读',1,'SSR'),(359,395,185,'流光追月神',1,'SP'),(360,396,186,'修罗鬼童丸',1,'SP'),(361,397,187,'坂田银时',0,'SSR'),(362,400,190,'盗墓小鬼',1,'N'),(363,401,191,'寄生魂',1,'N'),(364,403,192,'唐纸伞妖',1,'N'),(365,404,193,'天邪鬼绿',1,'N'),(366,405,194,'天邪鬼赤',1,'N'),(367,407,195,'天邪鬼青',1,'N'),(368,408,196,'帚神',1,'N'),(369,409,197,'涂壁',1,'N'),(370,416,198,'荒川呱',0,'N'),(371,417,199,'阎魔呱',0,'N'),(372,418,200,'两面佛呱',0,'N'),(373,419,201,'小鹿男呱',0,'N'),(374,421,202,'青行灯呱',0,'N'),(375,422,203,'妖刀姬呱',0,'N'),(376,423,204,'一目连呱',0,'N'),(377,424,205,'花鸟卷呱',0,'N'),(378,425,206,'辉夜姬呱',0,'N'),(379,426,207,'荒呱',0,'N'),(380,427,208,'彼岸花呱',0,'N'),(381,430,209,'御馔津呱',0,'N'),(382,500,210,'神乐&定春',0,'SSR'),(383,550,211,'孔雀明王',1,'SSR'),(384,551,212,'寻森小鹿男',1,'SP'),(385,552,213,'慧明灯',1,'SR'),(386,553,214,'闻人翊悬',0,'SSR'),(387,554,215,'纺愿缘结神',1,'SP'),(388,555,216,'渺念萤草',1,'SP'),(389,556,217,'天照',1,'SSR'),(390,557,218,'伊邪那美',1,'SSR'),(391,558,219,'盗人神',1,'SR'),(392,559,220,'本真三尾狐',1,'SP'),(393,561,221,'泷',1,'SSR'),(394,562,222,'鲸汐千姬',1,'SP'),(395,563,223,'初音未来',0,'SSR'),(396,564,224,'镜音铃·连',0,'SSR'),(397,565,225,'福悦座敷童子',1,'SP'),(398,566,226,'晨晖惠比寿',1,'SP'),(399,567,227,'申屠子夜',0,'SSR'),(400,568,228,'龙吟铃鹿御前',1,'SP'),(401,569,229,'猫川',1,'SSR'),(402,300,93,'玉藻前',1,'SSR'),(403,301,94,'数珠',0,'R'),(404,302,95,'小袖之手',0,'R'),(405,303,96,'弈',1,'SR'),(406,304,97,'御馔津',1,'SSR'),(407,305,98,'卖药郎',0,'SSR'),(408,306,99,'虫师',1,'R'),(409,307,100,'猫掌柜',1,'SR'),(410,308,101,'鬼灯',0,'SSR'),(411,309,102,'阿香',0,'SR'),(412,360,153,'灶门祢豆子',0,'SSR'),(413,361,154,'垢尝',0,'R'),(414,362,155,'蝉冰雪女',1,'SP'),(415,363,156,'帝释天',1,'SSR'),(416,364,157,'阿修罗',1,'SSR'),(417,365,158,'入内雀',1,'SR'),(418,366,159,'空相面灵气',1,'SP'),(419,367,160,'绘世花鸟卷',1,'SP'),(420,368,161,'饴细工',1,'SR'),(421,369,162,'食灵',1,'SSR'),(422,244,39,'首无',1,'R'),(423,245,40,'提灯小僧',1,'N'),(424,246,41,'赤舌',1,'N'),(425,247,42,'海坊主',1,'SR'),(426,241,36,'蝴蝶精',1,'R'),(427,277,72,'黑童子',1,'SR'),(428,278,73,'白童子',1,'SR'),(429,279,74,'花鸟卷',1,'SSR'),(430,398,188,'天逆每',1,'SR'),(431,399,189,'言灵',1,'SSR'),(432,570,230,'祸津神',1,'SSR'),(433,572,231,'遥念烟烟罗',1,'SP'),(434,573,232,'龙珏',1,'SSR'),(435,574,233,'心友犬神',1,'SP'),(436,575,234,'封阳君',1,'SSR'),(437,577,235,'鬼金羊',1,'SSR'),(438,578,236,'神酿星熊童子',1,'SP');
/*!40000 ALTER TABLE `gods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `godsrecommend`
--

DROP TABLE IF EXISTS `godsrecommend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `godsrecommend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `level` varchar(4) CHARACTER SET utf8mb4 NOT NULL,
  `pvp_score` int(11) NOT NULL,
  `pvp_content` varchar(999) CHARACTER SET utf8mb4 NOT NULL,
  `pve_score` int(11) NOT NULL,
  `pve_content` varchar(999) CHARACTER SET utf8mb4 NOT NULL,
  `shishen_id` int(11) NOT NULL,
  `sort` int(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `godsrecommend`
--

LOCK TABLES `godsrecommend` WRITE;
/*!40000 ALTER TABLE `godsrecommend` DISABLE KEYS */;
INSERT INTO `godsrecommend` VALUES (1,'天照','SSR',1,'可以用来挖土。',9,'非常强力的群体输出，你游唯一真神，必养。',556,1),(2,'因幡辉夜姬','SP',10,'可以用来做一波流阵容。',10,'满二技能就可以用，队友释放技能时，将自身爆伤30%给队友，非常强力的打火+增伤辅助，必养。',372,2),(7,'纺愿缘结神','SP',4,'二技能可以让队友很难被推条，打SP小鹿男用的。',8,'只需要行动两回合可以让指定式神稳定行动两次，非常强力的长线增伤辅助，必养。',554,3),(8,'伊邪那美','SSR',4,'斗技控制率不太高，不是很好用。',10,'拥有比清姬更高的破防效果，更好的控制效果，而且携带元兴寺还可以给队友提供增伤，必养。',557,4),(9,'空相面灵气','SP',6,'斗技可以用来当一速同时还能封印被动。',7,'记录伤害，配合食灵帝释天可以组成套娃阵容，单体非常强力。',366,5),(10,'千姬','SSR',7,'斗技配合须佐还是挺强的。',9,'普攻最好要点满，二技能可以不满。增伤打火式神，长线有75%增伤，如果有成型的鲸汐千姬可以暂时不用养。',356,6),(11,'须佐之男','SSR',8,'回合外伤害的机制，须佐会一直活跃在斗技上，但是祸津神上场后完全被克制。',10,'最强单体输出没有之一，但是前期还是以群体输出为主，在有了成型的群体输出时必养。',389,7),(12,'鲸汐千姬','SP',9,'可以在和初音组成很强的千音组合，非常强力。',9,'可以记录伤害，配合空相面灵气食组成三套娃阵容。如果有了成型的千姬可以先不养。',562,8),(13,'龙吟铃鹿御前','SP',5,'可以用来打穿盾伤害。',8,'可以先机让队友回合开始时攻击变为原来的155%，虽然只有一回合，但是她自身伤害不低，一定程度上可以替代不见岳，有成型的不见岳的话可以不养。',568,9),(14,'不见岳','SSR',3,'只能打一波',8,'可以先机让队友获得攻击，最强短线加攻式神，如果有了成型的sp铃鹿御前可以不养。',379,10),(15,'食灵','SSR',7,'可打一波，也可以做协战队伍，甚至可以带狂骨偷鸡。',8,'记录友方伤害，在友方式神行动三回合过后打出高额的复制伤害，打结界突破也很有用，必养。',369,11),(16,'帝释天','SSR',8,'懂不懂全民公ban的含金量。操控敌方式神两回合，非常强大的控制，只不过有了禅心云外镜后作用不大。',9,'友方造成非传导伤害时，帝释天可以额外造成40%，套娃加速器，必养。',363,12),(17,'神堕八岐大蛇','SP',3,'生根发芽目前用不大到了。',8,'可以当群体一波的输出，也可以献祭队友，用来打秘闻逢魔，在有群体输出的情况下可以不养。',383,13),(18,'阿修罗','SSR',2,'挖土也不用阿修罗了。',7,'曾经的最强群体输出，可惜现在被天照完全替代，还容易杀队友，没有天照的话可以养。',364,14),(19,'季','SSR',5,'可以双拉斗技，只不过有点怕犬神。',8,'不需要堆暴击的式神，带镇墓兽歌姬可以打出成吨的伤害，自身有免死，需要带一个盾辅，前期必养。',392,15),(20,'鬼王酒吞童子','SP',10,'斗技经久不衰的传奇式神了，斗技必养。',8,'被动可以使队友获得大妖之力，生命越低伤害越高、减伤越高，配合伊邪那美烧血可以打出一波很高的伤害，必养。',341,16),(21,'绘世花鸟卷','SP',1,'out',8,'大招使全体获得40%的群体伤害加成，另外队友攻击时会给敌方单体附加传导伤害，在应对一个主怪+5个小怪的副本里的最优解，后期必养，前期可以不用养。',367,17),(22,'流光追月神','SP',10,'斗技最强打火机，不会断火的存在，打斗技的话必养。',6,'作为打火机，附带的增伤效果远不如因幡辉夜姬和千姬，但是攻击加成和回合外的行动可以很好的配合季，除非没有千姬和因幡辉夜姬不然不用养。',395,18),(23,'孔雀明王','SSR',5,'大招让敌人无法普攻，斗技可以用来克制普攻队，但是会被猫川驱散。',9,'叠两回合buff然后打三回合的爆炸输出，非常依赖大缘神，在有天照的情况下可以不用养。',550,19),(24,'泷','SSR',9,'可以先机降低对方的暴击伤害，打一波队非常有用，而且自身伤害也不低，打斗技还没一速的话可以养一只。',1,'out',561,26),(25,'浮世青行灯','SP',3,'千帝灯已经成为历史，现在几乎用不到了。',7,'被动没有动画先机就可以根据消耗和获得鬼火增加攻击力，而且还有超高倍率的终极大招，可以用来打逢魔，也可以用来挖土作为无动画的增伤点，但总体来说用处不大，可以不养。',348,24),(26,'寻香行','SSR',1,'out',6,'大招群体破防，总体来说用处不大，唯一就业在超鬼王活动，不推荐养。',391,41),(27,'禅心云外镜','SP',10,'他的二技能可以强制让队友的控制效果回合数-1，如果没有解除控制效果还能100%拉条，大招扣血获得高额的护盾，行动时还能平分队友血量，斗技超级毒瘤了，打斗技的话必养。',1,'out',393,25),(28,'本真三尾狐','SP',5,'可以用白藏主偷鸡。',7,'配合季打回合外的永动机，用来打真蛇、地狱鬼王等，可以不用养。',559,27),(29,'神启荒','SP',10,'对方未使用鬼火就会炸一下，前期非常强力的斗技神器了属于是，打斗技的话必养。',1,'暂时用不到。',390,22),(30,'心狩鬼女红叶','SP',8,'我叶一A秒了，不解释。',7,'减防的工具人，可以不用养。',388,28),(31,'缚骨清姬','SP',3,'曾经有鸡白的打法，现在慢慢也不怎么用了，只打斗技的话不推荐养。',6,'可以用来破防，二技能挂蛇后生命越低攻击越低受到的伤害越高，打单体boss效果很好，但是不如千姬，而且是召唤物不能和千姬一起上，有一定练度后可以养。',352,37),(32,'寻森小鹿男','SP',8,'完美克制神荒红叶等低速输出，斗技必养。',1,'out',551,31),(33,'天剑韧心鬼切','SP',8,'有自拉条，可以配合须佐多戳几下。锁定敌方单体式神后，该式神无法反击，打普攻队的神器了属于是，打斗技必养。',1,'out',343,32),(34,'阎魔','SSR',10,'可以不用喂技能，拥有最快基础127的速度，大招沉默+变形一个敌方式神，只要还存在斗技，阎魔就永远不会失业。',1,'out',255,33),(35,'大夜摩天阎魔','SP',10,'4号位必须带命中，不仅可以主动使用大招作为控制手段，还会在某些情况下回合外自动使用大招，非常强力的控制式神，就是有点怕云外镜，斗技必养。',1,'out',385,29),(36,'渺念萤草','SP',5,'普攻伤害高，可以用蛇拉起来秒人。',4,'目前唯一就业就是魂王，做一个出来可以蹭魂王车，也算有点作用，不推荐养。',555,34),(37,'麓铭大岳丸','SP',5,'结界突破可以用来收尾，只不过现在都用伊邪那美作为收尾式神了。',7,'带蝠翼胧车可以挂机秘闻，麒麟可以用鹿丸献祭流阵容，黑蛋充裕的话可以养一只玩玩，但是资源紧张的话不用养。',355,20),(38,'月读','SSR',6,'二技能放一个蛋在召唤物区，蛋有70%的概率在友方式神受到单体伤害或者单体控制的时候替你承受，70%的概率一直不触发你可能就要裂开了，永远的T0.7属于是，斗技的话可以养一只。',1,'out',394,36),(39,'晨晖惠比寿','SP',6,'听说双老头斗技很猛，我也不知道，应该不是萌新能玩得来的东西，非大佬不要养。',3,'貌似没有就业，等开发，不要养。',566,45),(40,'言灵','SSR',10,'斗技有多恶心不用我多说了吧，对面鬼火获得到一定数量获得一定回合后就会释放大招污染鬼火，你不打斗技也肯定在结界突破遇到过。打斗技的话必养。',3,'pve目前只有超鬼王活动中挺猛的，不推荐养。',399,23),(41,'蝉冰雪女','SP',7,'自带防爆盾，二技能复活全队，可以用来反打一波流阵容，有需要的话可以养。',2,'貌似可以刷日轮之城，其他的用不到。',362,39),(42,'辉夜姬','SSR',5,'只有辉夜姬的情况下只能养辉夜姬，如果有其他的打火机就可以不养。',5,'不要喂黑蛋，在没有其他的打火机情况下只能选择辉夜姬。',280,40),(43,'白藏主','SSR',8,'绝对的一速，绝对的单体防御，既可以带白面超车，也可以防止单体伤害，必养。',1,'除了部分秘闻，没什么其他的用处，不打斗技不推荐养。',316,35),(44,'一目连','SSR',6,'斗技可以用来打千泷队伍。',5,'可以非常好的保护季，有需要就养。',272,38),(45,'面灵气','SSR',7,'基础速度最快的群拉拉条，配合白藏主稳定超车，在你有了一定练度之后必养。',1,'几乎没什么用处了。（第二层0防御可以用来挖土（狗头））。',311,30),(46,'饭笥','SSR',1,'out',6,'目前只有很少的副本用得到，而且都可以被替代，可以养一只打永生之海。',370,42),(47,'彼岸花','SSR',6,'斗技尽头是花驴。我五手固定上彼岸花怎么能叫偷花？',1,'out',288,43),(48,'缘结神','SSR',1,'缘神那么可爱，你怎么忍心让她去打斗技？',7,'可以做sp缘结神的替代用，需要叠满7层被动才能够稳定双动，只在没有sp缘结神的情况下养。',347,21),(49,'祸津神','SSR',7,'非常强大的护盾系式神。',7,'先机会给带盾的友方式神增加27%爆伤，只要这个机制在他就永远在PVE有一席之地。',570,6),(50,'御馔津','SSR',7,'斗技的尽头不是花，而是驴！神之一手，五手上驴！五连封印，诸天灭地！',1,'out',304,44),(51,'遥念烟烟罗','SP',8,'斗技可以变形，用的不多。',7,'out',572,20);
/*!40000 ALTER TABLE `godsrecommend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yuhun`
--

DROP TABLE IF EXISTS `yuhun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yuhun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `is_chieftain` tinyint(255) NOT NULL DEFAULT '0',
  `two_piece_effect` varchar(255) DEFAULT NULL,
  `two_piece_name` varchar(255) DEFAULT NULL,
  `two_piece_value` int(255) DEFAULT '15',
  `four_piece_effect` varchar(255) DEFAULT NULL,
  `yuhun_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yuhun`
--

LOCK TABLES `yuhun` WRITE;
/*!40000 ALTER TABLE `yuhun` DISABLE KEYS */;
INSERT INTO `yuhun` VALUES (1,'雪幽魂',0,'防御加成30%','defenseAdditionRate',30,'造成伤害时，有15%(若目标带有减速效果则为30%)基础概率冰冻1回合；受到攻击时，使攻击者减速30点，持续1回合。',300002),(2,'地藏像',0,'生命加成15%','maxHpAdditionRate',15,'受到暴击时，自身100%，友方30%概率获得1回合护盾，能吸收10%生命上限的伤害；对被嘲讽目标降低60%触发概率。',300003),(3,'蝠翼',0,'攻击加成15%','attackAdditionRate',15,'造成伤害时，附带20%吸血。',300004),(4,'涅槃之火',0,'生命加成15%','maxHpAdditionRate',15,'回合结束时，如果生命低于30%，治疗生命上限15%的生命。',300006),(5,'三味',0,'暴击15%','critRateAdditionVal',15,'任意友方承受控制效果和放逐时，使其提升30点速度，持续2回合，此增益不可驱散，可叠加两层。',300007),(6,'魍魉之匣',0,'效果抵抗15%','debuffResist',15,'造成伤害时，有25%基础概率随机附加眩晕、沉默、减疗40%、混乱，持续一回合。',300008),(7,'被服',0,'生命加成15%','maxHpAdditionRate',15,'30%减伤。',300009),(8,'招财猫',0,'防御加成30%','defenseAdditionRate',30,'回合开始时，有50%的概率获得2点鬼火。',300010),(9,'反枕',0,'防御加成30%','defenseAdditionRate',30,'造成伤害时有23%的基础概率使目标睡眠1回合.',300011),(10,'轮入道',0,'攻击加成15%','attackAdditionRate',15,'行动结束时，有20%概率获得新的回合。',300012),(11,'日女巳时',0,'防御加成30%','defenseAdditionRate',30,'造成伤害时有20%概率击退目标30%行动条，若其带有增益状态、印记，触发概率提升提高10%。',300013),(12,'镜姬',0,'生命加成15%','maxHpAdditionRate',15,'受到伤害时，有30%的概率造成100%反伤，对被嘲讽目标触发概率降低60%',300014),(13,'钟灵',0,'生命加成15%','maxHpAdditionRate',15,'造成伤害时，有10%的基础概率眩晕目标1回合。若敌方无人处于眩晕中，则基础概率改为20%。',300015),(14,'狰',0,'攻击加成15%','attackAdditionRate',15,'受到敌方伤害时，有35%概率反击。对被嘲讽目标降低60%触发概率。',300018),(15,'火灵',0,'效果命中15%','debuffEnhance',15,'战斗开始时，获得3点鬼火。',300019),(16,'鸣屋',0,'攻击加成15%','attackAdditionRate',15,'攻击时，若目标带有控制效果，提升45%伤害。',300020),(17,'薙魂',0,'生命加成15%','maxHpAdditionRate',15,'唯一效果。友方被攻击时50%概率守护。使其中的单体伤害降低20%，再分摊50%，直到攻击结束。每次攻击最多触发一次。',300021),(18,'心眼',0,'攻击加成15%','attackAdditionRate',15,'造成伤害时，目标生命比例每降低15%，提升10%伤害。',300022),(19,'木魅',0,'防御加成30%','defenseAdditionRate',30,'任何友方受到伤害时，有15%概率削减伤害者1点鬼火，单次攻击内最多触发一次；对被嘲讽目标降低60%触发概率。',300023),(20,'树妖',0,'生命加成15%','maxHpAdditionRate',15,'治疗时，增加20%（若目标生命低于20%，改为增加50%）基础治疗。',300024),(21,'网切',0,'暴击15%','critRateAdditionVal',15,'攻击时，50%概率无视45%防御。',300026),(22,'阴摩罗',0,'攻击加成15%','attackAdditionRate',15,'击败目标时，获得三点鬼火。',300027),(23,'伤魂鸟',0,'暴击15%','critRateAdditionVal',15,'任一非怪物目标阵亡时，治疗生命上限20%的生命，并提升20%伤害（上限120%）,直到战斗结束。',300029),(24,'破势',0,'暴击15%','critRateAdditionVal',15,'造成伤害时，若目标生命比例高于70%，提升40%伤害。',300030),(25,'镇墓兽',0,'暴击15%','critRateAdditionVal',15,'生命比例每降低1%，提升暴击伤害的0.5%。',300031),(26,'珍珠',0,'防御加成30%','defenseAdditionRate',30,'治疗时，目标获得不可驱散的护盾2回合，能吸收等同基础治疗30%的伤害。',300032),(27,'骰子鬼',0,'效果抵抗15%','debuffResist',15,'抵抗时，反击来源目标，该次反击提升50%伤害。未被控制时承受控制效果，增加25%行动条。',300033),(28,'蚌精',0,'效果命中15%','debuffEnhance',15,'战斗开始时，友方全体获得无法驱散的护盾1回合，能吸收等同生命上限10%的伤害。',300034),(29,'魅妖',0,'防御加成30%','defenseAdditionRate',30,'造成伤害时，有25%基础概率十目标混乱1回合。',300035),(30,'针女',0,'暴击15%','critRateAdditionVal',15,'暴击时，有40%概率对目标造成其生命上限10%的无视防御的伤害，最高不超过攻击120%。',300036),(31,'返魂香',0,'效果抵抗15%','debuffResist',15,'受到伤害时，有25%基础概率使伤害者眩晕1回合。对被嘲讽目标降低60%触发概率。',300039),(32,'狂骨',0,'攻击加成15%','attackAdditionRate',15,'造成伤害时，每拥有1点鬼火，提升8%伤害。',300048),(33,'幽谷响',0,'效果抵抗15%','debuffResist',15,'抵抗控制效果时，有50%概率将该效果反弹给来源目标，且必定命中。',300049),(34,'土蜘蛛',1,'唯一被动，对怪物造成伤害时，为其附加1层土蜘蛛印记，降低10%速度，并造成10%间接伤害，持续1回合。上限3层。',NULL,NULL,'',300050),(35,'胧车',1,'唯一被动，受到怪物攻击时，有50%概率增加30%行动条，单次攻击内最多触发1次。',NULL,NULL,NULL,300051),(36,'荒骷髅',1,'唯一被动，提升10%对怪物伤害，若受到怪物伤害，提升效果改为25%，持续一回合。',NULL,NULL,NULL,300052),(37,'地震鲶',1,'唯一被动，与怪物的战斗开始时，活动60%减伤；每次受到伤害，将6%减伤转化为提升1.5%伤害，单次攻击内最多触发1次。',NULL,NULL,NULL,300053),(38,'蜃气楼',1,'唯一被动，与怪物的战斗开始，获得庇护。庇护会在消失后5回合重新获得。',NULL,NULL,NULL,300054),(39,'飞缘魔',0,'效果命中15%','debuffEnhance',15,'附加负面效果时，无视30%总效果抵抗。',300073),(40,'兵主部',0,'攻击加成15%','attackAdditionRate',15,'回合结束后，获得1层兵刃(增益，状态)。每层将在造成伤害时无视目标75点防御，上限3层。',300074),(41,'青女房',0,'暴击15%','critRateAdditionVal',15,'首次受到致命伤害时，移除所有状态和印记，恢复100%生命并使自身冰封1回合，期间提升100%防御、免疫所有减益。若冰封结束时仍存活则再次恢复100%生命。每回目仅触发一次。',300075),(42,'涂佛',0,'生命加成15%','maxHpAdditionRate',15,'回合结束时，若本回合普攻或无法动作，使友方全体提升15%效果抵抗、伤害，维持两回合，自身提升双倍。',300076),(43,'鬼灵歌妓',1,'唯一被动，每对怪物造成5次伤害后，下一次对怪物造成伤害将会对其造成生命上限20%的无视防御伤害，最高不超过攻击255%。',NULL,NULL,NULL,300077),(44,'遗念火',0,'效果命中15%','debuffEnhance',15,'携带者回合开始时获得1层念火(上限3层)，每层提供20%效果抵抗，携带者施放技能时优先消耗自身念火替代等量鬼火。',300079),(45,'共潜',0,'效果抵抗15%','debuffResist',15,'回合结束时随机驱散己方1个负面状态，若回合中未造成伤害，则额外随机驱散己方2个负面状态。',300080),(46,'恶楼',0,'生命加成15%','maxHpAdditionRate',15,'战斗开始时，获得恶楼之力(增伤80%、减伤80%)。\\n在携带者的前8回合，恶楼之力暂时被封禁。',300081),(47,'吹贝坊',0,'攻击加成15%','attackAdditionRate',15,'携带者每回合开始获得1层可以抵挡一次伤害的贝甲，当贝甲存在的时候伤害提升25%。',300082),(48,'海月火玉',0,'暴击15%','critRateAdditionVal',15,'鬼火、愿力或者义火足够时，施放妖术额外消耗1点鬼火、愿力或者义火并提升40%伤害。',300083),(49,'出世螺',0,'防御加成30%','defenseAdditionRate',30,'每次受到伤害后恢复该伤害10%的生命值。战斗开始和自身行动前会获得螺壳（上限1层），单次受到超过最大生命值60%的伤害时，将该伤害降低为最大生命值的60%，并移除螺壳。',300084),(50,'火之车',0,'防御加成30%','defenseAdditionRate',30,'当携带者回合结束时，获得1层墓火。累计4层时清空层数并获得1个回合。在该回合中鬼火消耗减少1点。',300085),(51,'隐念',0,'攻击加成15%','attackAdditionRate',15,'携带者造成的伤害提升20%，若对同一目标重复造成伤害，造成的伤害依次提升至40%、60%，之后从20%开始循环判定。',300086),(52,'叠叩',0,'生命加成15%','maxHpAdditionRate',15,'（唯一效果）若自身初始暴击超过120%时，全体非召唤物友方减少15%受到的暴击伤害。',300087),(53,'应声虫',0,'暴击15%','critRateAdditionVal',15,'携带者获得20%协战概率。',300088),(54,'元兴寺',0,'效果命中15%','debuffEnhance',15,'（唯一效果）携带者回合内造成控制效果时，每命中1个目标，使全体非召唤物友方造成的伤害提升5%（单次控制重复命中同目标时，仅生效1次），最多提升40%，持续2回合。',300089),(55,'钓瓶火',0,'效果抵抗15%','debuffResist',15,'回合结束后，额外推进1格火的行动条，并为当前生命比例最低的非召唤物友方目标治疗自身防御力700%的生命。',300090),(56,'夜荒魂',1,'唯一被动，携带者回合内对怪物造成控制效果或放逐时，每命中1个目标，使全体非召喚物友方提升15点速度（单次控制重复命中同目标时，仅生效1次），最多提升90点，维持1回合。',NULL,NULL,NULL,300091);
/*!40000 ALTER TABLE `yuhun` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'yys_gods'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-26 10:53:06

