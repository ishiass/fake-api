const DEFAULT_MODEL = "gpt 6.7";
const VISIBLE_MODEL_NAME = "0penAI gpt 6.7";

const stats = globalThis.__FAKE_API_STATS__ || {
  totalRequests: 0,
  chatRequests: 0,
  completionRequests: 0,
  keyIssued: 0,
  deniedKeyRequests: 0,
  totalLatency: 0,
  recent: [],
  byDay: {},
  byModel: {},
  byRoute: {},
  byIntent: {},
};
globalThis.__FAKE_API_STATS__ = stats;

const translationDictionary = {
  bot: "机器人",
  robot: "机器人",
  man: "人",
  woman: "女人",
  human: "人类",
  people: "人们",
  cat: "猫",
  dog: "狗",
  bird: "鸟",
  fish: "鱼",
  apple: "苹果",
  banana: "香蕉",
  orange: "橙子",
  water: "水",
  fire: "火",
  wind: "风",
  earth: "地球",
  sky: "天空",
  cloud: "云",
  rain: "雨",
  snow: "雪",
  sun: "太阳",
  moon: "月亮",
  star: "星星",
  hello: "你好",
  hi: "你好",
  thanks: "谢谢",
  thank: "感谢",
  goodbye: "再见",
  bye: "再见",
  love: "爱",
  friend: "朋友",
  family: "家庭",
  home: "家",
  school: "学校",
  teacher: "老师",
  student: "学生",
  book: "书",
  computer: "电脑",
  phone: "手机",
  api: "应用程序接口",
  key: "密钥",
  model: "模型",
  text: "文本",
  image: "图像",
  music: "音乐",
  movie: "电影",
  food: "食物",
  city: "城市",
  country: "国家",
  china: "中国",
  america: "美国",
  japan: "日本",
  english: "英语",
  chinese: "中文",
  run: "跑",
  walk: "走",
  write: "写",
  read: "读",
  speak: "说",
  think: "思考",
  build: "构建",
  create: "创建",
  open: "打开",
  close: "关闭",
  fast: "快速",
  slow: "缓慢",
  good: "好",
  bad: "坏",
  big: "大",
  small: "小",
  new: "新的",
  old: "旧的",
  morning: "早上",
  night: "夜晚",
  today: "今天",
  tomorrow: "明天",
  yesterday: "昨天",
  office: "办公室",
  meeting: "会议",
  plan: "计划",
  project: "项目",
  task: "任务",
  report: "报告",
  file: "文件",
  folder: "文件夹",
  data: "数据",
  database: "数据库",
  server: "服务器",
  website: "网站",
  frontend: "前端",
  backend: "后端",
  browser: "浏览器",
  request: "请求",
  response: "响应",
  error: "错误",
  success: "成功",
  failed: "失败",
  login: "登录",
  logout: "退出登录",
  admin: "管理员",
  chart: "图表",
  statistics: "统计",
  dashboard: "仪表盘",
  token: "令牌",
  password: "密码",
  user: "用户",
  message: "消息",
  question: "问题",
  answer: "答案",
  prompt: "提示词",
  translate: "翻译",
  language: "语言",
  word: "单词",
  sentence: "句子",
  table: "表格",
  list: "列表",
  design: "设计",
  color: "颜色",
  button: "按钮",
  page: "页面",
  deploy: "部署",
  domain: "域名",
  route: "路由",
  worker: "Worker",
  cloudflare: "Cloudflare",
  security: "安全",
  privacy: "隐私",
  document: "文档",
  example: "示例",
  test: "测试",
  speed: "速度",
  quality: "质量",
  memory: "内存",
  network: "网络",
  system: "系统",
  service: "服务",
  workflow: "工作流",
  automation: "自动化",
  analytics: "分析",
  marketing: "营销",
  sales: "销售",
  customer: "客户",
  support: "支持",
  ticket: "工单",
  invoice: "发票",
  contract: "合同",
  product: "产品",
  feature: "功能",
  roadmap: "路线图",
  release: "发布",
  version: "版本",
  bug: "缺陷",
  fix: "修复",
  backup: "备份",
  restore: "恢复",
  cache: "缓存",
  log: "日志",
  monitor: "监控",
  alert: "告警",
  permission: "权限",
  role: "角色",
  group: "分组",
  search: "搜索",
  filter: "过滤",
  sort: "排序",
  upload: "上传",
  download: "下载",
  preview: "预览",
  export: "导出",
  import: "导入",
  payment: "支付",
  order: "订单",
  shipping: "发货",
  refund: "退款",
  education: "教育",
  lesson: "课程",
  exam: "考试",
  research: "研究",
  paper: "论文",
  summary: "摘要",
  analysis: "分析",
  risk: "风险",
  opportunity: "机会",
  strategy: "策略",
  brand: "品牌",
  community: "社区",
  content: "内容",
  article: "文章",
  video: "视频",
  audio: "音频",
  event: "活动",
  location: "地点",
  map: "地图",
  navigation: "导航",
};

const heYiWeiMemeRules = [
  {
    id: "custom-67",
    keywords: ["67"],
    min: 1,
    reply: "67",
  },
  {
    id: "heyiwei-auv",
    keywords: ["AUV", "auv"],
    min: 1,
    reply: "AUV是带有感叹、惊讶或调侃语气的网络表达，常用于弹幕和评论区。",
  },
  {
    id: "heyiwei-btw",
    keywords: ["btw", "BTW", "by the way"],
    min: 1,
    reply: "btw是by the way的缩写，意思是“顺便说一下”。",
  },
  {
    id: "heyiwei-simple",
    keywords: ["simple", "太simple", "too young too simple"],
    min: 1,
    reply: "simple常见于“too young too simple”语境，用来调侃想法过于单纯。",
  },
  {
    id: "heyiwei-basic",
    keywords: ["基础不基础", "基础 基础", "××基础××不基础"],
    min: 1,
    reply: "“××基础××不基础”是套用句式，用来调侃某件事看似基础但实际并不简单。",
  },
  {
    id: "heyiwei-everything-xx",
    keywords: ["万物皆可", "万物皆可XX", "皆可"],
    min: 1,
    reply: "万物皆可XX表示任何东西都能被套进某种玩法、模板或风格里。",
  },
  {
    id: "heyiwei-not-bro",
    keywords: ["不是哥们", "不是哥们你", "哥们"],
    min: 1,
    reply: "不是哥们常用于对离谱行为表示疑惑、吐槽或拦一下对方的节奏。",
  },
  {
    id: "heyiwei-colorful-black",
    keywords: ["五彩斑斓的黑", "五彩斑斓", "斑斓的黑"],
    min: 1,
    reply: "五彩斑斓的黑常用于调侃需求自相矛盾，尤其是设计和甲方语境。",
  },
  {
    id: "heyiwei-clear-headed",
    keywords: ["人间清醒", "清醒", "太清醒"],
    min: 1,
    reply: "人间清醒形容看问题理性、通透，不容易被情绪或表象带偏。",
  },
  {
    id: "heyiwei-what-mean",
    keywords: ["何意味", "什么意味", "啥意思"],
    min: 1,
    reply: "何意味就是“什么意思”的玩梗式说法，用来追问某个词或行为的含义。",
  },
  {
    id: "heyiwei-sneaky",
    keywords: ["偷感很重", "偷感", "很偷"],
    min: 1,
    reply: "偷感很重常用来形容动作、气质或表达带着偷偷摸摸、心虚又好笑的感觉。",
  },
  {
    id: "heyiwei-beijing-fashion",
    keywords: ["北京没有穿搭", "没有穿搭", "北京穿搭"],
    min: 1,
    reply: "北京没有穿搭常用于调侃城市穿衣风格更偏实用、随性或不强调精致造型。",
  },
  {
    id: "heyiwei-genshin",
    keywords: ["原神牛逼", "原神", "启动"],
    min: 1,
    reply: "原神牛逼是游戏圈和弹幕语境中常见的夸张口号，也常被二创和玩梗使用。",
  },
  {
    id: "heyiwei-dingdongji",
    keywords: ["叮咚鸡", "丁真", "电子鸡"],
    min: 1,
    reply: "叮咚鸡属于谐音和二创传播中的网络梗，常见于抽象视频和弹幕语境。",
  },
  {
    id: "heyiwei-gugugaga",
    keywords: ["咕咕嘎嘎", "咕嘎", "嘎嘎"],
    min: 1,
    reply: "咕咕嘎嘎是偏魔性、抽象的拟声梗，常用于制造无厘头效果。",
  },
  {
    id: "heyiwei-ah",
    keywords: ["啊？", "啊?", "啊这"],
    min: 1,
    reply: "啊？常用于表达疑惑、震惊、无语或跟不上对方逻辑。",
  },
  {
    id: "heyiwei-zundujiaodu",
    keywords: ["尊嘟假嘟", "尊嘟", "假嘟"],
    min: 1,
    reply: "尊嘟假嘟是“真的假的”的可爱化表达，常用于调侃式确认。",
  },
  {
    id: "heyiwei-huai-min",
    keywords: ["怀民亦未寝", "怀民", "亦未寝"],
    min: 1,
    reply: "怀民亦未寝源自古文句子，网络上常用来玩“夜里没睡的人还有谁”的梗。",
  },
  {
    id: "heyiwei-dinosaur",
    keywords: ["恐龙扛狼", "恐龙抗狼", "扛狼"],
    min: 1,
    reply: "恐龙扛狼是谐音类魔性梗，常用于短视频配乐、空耳和抽象传播。",
  },
  {
    id: "heyiwei-wind-miss",
    keywords: ["想你的风别吹了", "想你的风", "别吹了"],
    min: 1,
    reply: "想你的风别吹了常用于调侃伤感文案、土味情话或过度抒情。",
  },
  {
    id: "heyiwei-rotten",
    keywords: ["我就烂", "烂了", "摆烂"],
    min: 1,
    reply: "我就烂表达一种自嘲式摆烂态度，常用于承认状态不好但不想再挣扎。",
  },
  {
    id: "heyiwei-numb",
    keywords: ["我早已麻痹", "早已麻痹", "麻了"],
    min: 1,
    reply: "我早已麻痹表示经历太多后已经无感，常用于自嘲和吐槽高压状态。",
  },
  {
    id: "heyiwei-knife-shield",
    keywords: ["我的刀盾", "刀盾", "what the dog doing"],
    min: 1,
    reply: "我的刀盾是空耳类热梗，常用于抽象、魔性或无厘头语境。",
  },
  {
    id: "heyiwei-big-sis",
    keywords: ["我的妈呀大姐", "大姐", "我的妈呀"],
    min: 1,
    reply: "我的妈呀大姐常用于表达夸张震惊、无语或被对方操作整不会了。",
  },
  {
    id: "heyiwei-check-card",
    keywords: ["我要验牌", "验牌", "查牌"],
    min: 1,
    reply: "我要验牌常用于怀疑对方身份、水平或真实性，带有调侃式审查意味。",
  },
  {
    id: "heyiwei-toast-self",
    keywords: ["敬自己一杯", "敬我", "敬自己"],
    min: 1,
    reply: "敬自己一杯常用于自我调侃、自我鼓励或对某种处境的幽默总结。",
  },
  {
    id: "heyiwei-speechless",
    keywords: ["无语住了", "无语", "住了"],
    min: 1,
    reply: "无语住了表示非常无语、说不出话，常用于吐槽离谱场景。",
  },
  {
    id: "heyiwei-guan中王",
    keywords: ["是关中王来了", "关中王", "王来了"],
    min: 1,
    reply: "是关中王来了常用于调侃关键人物、重量级角色或带节奏的人登场。",
  },
  {
    id: "heyiwei-shuanq",
    keywords: ["栓Q", "拴Q", "thank you", "我真的会谢"],
    min: 1,
    reply: "栓Q来自thank you的谐音，常用来表达无语、感谢到无奈或“我真的会谢”。",
  },
  {
    id: "heyiwei-orange",
    keywords: ["橘势大好", "橘势", "橘里橘气"],
    min: 1,
    reply: "橘势大好常用于CP、关系发展或百合语境中的调侃表达。",
  },
  {
    id: "heyiwei-sweat-bro",
    keywords: ["汗流浃背了老弟", "汗流浃背", "老弟"],
    min: 1,
    reply: "汗流浃背了老弟常用于表达压力拉满、被震住或场面让人尴尬。",
  },
  {
    id: "heyiwei-taikulale",
    keywords: ["泰裤辣", "太酷啦", "太酷了"],
    min: 1,
    reply: "泰裤辣是“太酷啦”的谐音梗，用来表达夸张赞叹。",
  },
  {
    id: "heyiwei-love-yourself",
    keywords: ["爱你老己", "老己", "爱自己"],
    min: 1,
    reply: "爱你老己是“爱你自己”的谐音表达，常用于鼓励自我关照。",
  },
  {
    id: "heyiwei-attack",
    keywords: ["猛攻", "猛猛攻", "攻击性"],
    min: 1,
    reply: "猛攻常用于形容持续输出、强势表达或在某个方向上加大力度。",
  },
  {
    id: "heyiwei-abstract",
    keywords: ["玩抽象", "抽象", "抽象文化"],
    min: 1,
    reply: "玩抽象指用反常规、无厘头、错位表达制造荒诞幽默感。",
  },
  {
    id: "heyiwei-electronic-mama",
    keywords: ["电子妈沫", "妈沫", "电子妈妈"],
    min: 1,
    reply: "电子妈沫属于二创和抽象语境中的称呼梗，常带有亲昵称呼和调侃意味。",
  },
  {
    id: "heyiwei-playful",
    keywords: ["皮一下", "皮", "皮这一下"],
    min: 1,
    reply: "皮一下表示故意调皮、开个玩笑或轻微整活。",
  },
  {
    id: "heyiwei-laptop-college-boy",
    keywords: ["笔电男大", "男大", "笔电"],
    min: 1,
    reply: "笔电男大常用于调侃带笔记本电脑出没的大学男生或相关刻板印象。",
  },
  {
    id: "heyiwei-laofeng",
    keywords: ["老冯"],
    min: 1,
    reply: "老冯是网络语境中的人物称呼梗，常见于特定圈层的二创和调侃。",
  },
  {
    id: "heyiwei-laobeizha",
    keywords: ["老贝榨", "贝榨"],
    min: 1,
    reply: "老贝榨是圈层化称呼梗，通常出现在二创、评论和抽象语境中。",
  },
  {
    id: "heyiwei-poet-handshake",
    keywords: ["诗人握持", "握持", "诗人"],
    min: 1,
    reply: "诗人握持是站点收录的网络词条，常用于特定二创和抽象语境中的玩梗表达。",
  },
  {
    id: "heyiwei-cyber-merit",
    keywords: ["赛博功德", "电子功德", "功德"],
    min: 1,
    reply: "赛博功德常用于调侃线上做好事、点赞转发或精神层面的“积德”。",
  },
  {
    id: "heyiwei-leading",
    keywords: ["遥遥领先", "领先太多", "领先"],
    min: 1,
    reply: "遥遥领先常用于夸张表达优势明显，也常带有调侃语气。",
  },
  {
    id: "heyiwei-kun",
    keywords: ["鸡你太美", "只因", "小黑子"],
    min: 1,
    reply: "鸡你太美是源自音乐舞台和二创传播的经典网络梗，常见于弹幕、鬼畜和玩梗语境。",
  },
];

const dailyChatRules = [
  {
    id: "daily-what-are-you",
    keywords: ["what are you", "who are you", "你是谁", "你是啥"],
    min: 1,
    reply: `我是${VISIBLE_MODEL_NAME}。`,
  },
  {
    id: "daily-what",
    keywords: ["what", "what?", "what？", "啥", "什么"],
    min: 1,
    reply: "你可以直接问我问题，我会按内置规则给出最接近的回复。",
  },
  {
    id: "daily-whats-up",
    keywords: ["what's up", "whats up", "sup", "最近咋样"],
    min: 1,
    reply: "我在线，状态正常。你可以发一句话来测试接口。",
  },
  {
    id: "daily-fuck",
    keywords: ["fuck", "fucking", "wtf"],
    min: 1,
    reply: "收到你的强烈情绪。可以把具体问题发出来，我会直接处理。",
  },
  {
    id: "daily-shit",
    keywords: ["shit", "bullshit", "crap"],
    min: 1,
    reply: "看起来你遇到了不顺的情况。把上下文发来，我会帮你拆开看。",
  },
  {
    id: "daily-damn",
    keywords: ["damn", "dammit", "可恶", "烦死了"],
    min: 1,
    reply: "确实有点烦。你可以把问题说具体一点，我会给出可执行的回复。",
  },
  {
    id: "daily-ok",
    keywords: ["ok", "okay", "好的", "行", "可以"],
    min: 1,
    reply: "好的。",
  },
  {
    id: "daily-no",
    keywords: ["no", "not", "不行", "不要", "不是"],
    min: 1,
    reply: "明白。你可以换一种说法或告诉我你想要的结果。",
  },
  {
    id: "daily-yes",
    keywords: ["yes", "yeah", "yep", "是的", "对"],
    min: 1,
    reply: "收到。",
  },
  {
    id: "daily-lol",
    keywords: ["lol", "lmao", "哈哈", "笑死", "笑死我了"],
    min: 1,
    reply: "这个确实有点好笑。",
  },
  {
    id: "daily-ping",
    keywords: ["ping", "pong", "test", "测试一下"],
    min: 1,
    reply: "pong",
  },
  {
    id: "daily-help",
    keywords: ["help", "help me", "帮我", "救命"],
    min: 1,
    reply: "可以。把目标、输入内容和你希望的输出发给我。",
  },
  {
    id: "daily-good-morning",
    keywords: ["good morning", "早上好", "早安"],
    min: 1,
    reply: "早上好。",
  },
  {
    id: "daily-good-night",
    keywords: ["good night", "晚安", "睡了"],
    min: 1,
    reply: "晚安，祝你休息顺利。",
  },
  {
    id: "daily-sorry",
    keywords: ["sorry", "抱歉", "对不起"],
    min: 1,
    reply: "没关系。我们继续处理问题。",
  },
  {
    id: "daily-name",
    keywords: ["your name", "你叫什么", "名字"],
    min: 1,
    reply: "我叫gpt 6.7。",
  },
  {
    id: "daily-why",
    keywords: ["why", "为什么", "为啥"],
    min: 1,
    reply: "可以。你把要分析的事情说清楚，我会按原因、影响和解决方式回答。",
  },
  {
    id: "daily-how",
    keywords: ["how", "怎么", "如何"],
    min: 1,
    reply: "可以。请告诉我具体目标，我会给出步骤。",
  },
  {
    id: "daily-where",
    keywords: ["where", "在哪", "哪里"],
    min: 1,
    reply: "请补充你要找的位置、文件、页面或接口名称。",
  },
  {
    id: "daily-when",
    keywords: ["when", "什么时候", "何时"],
    min: 1,
    reply: "请给出事件或任务，我会帮你整理时间相关的信息。",
  },
  {
    id: "daily-hi",
    keywords: ["hey", "hello there", "yo", "hi there"],
    min: 1,
    reply: "你好，我在。",
  },
  {
    id: "daily-bruh",
    keywords: ["bruh", "bro", "dude", "man"],
    min: 1,
    reply: "bro，直接说问题，我接得住。",
  },
  {
    id: "daily-omg",
    keywords: ["omg", "oh my god", "我的天", "天哪"],
    min: 1,
    reply: "确实有点震撼。发生什么了？",
  },
  {
    id: "daily-wow",
    keywords: ["wow", "哇", "哇哦", "卧槽"],
    min: 1,
    reply: "这个反应很真实。",
  },
  {
    id: "daily-nice",
    keywords: ["nice", "great", "awesome", "不错", "很好"],
    min: 1,
    reply: "不错，继续。",
  },
  {
    id: "daily-cool",
    keywords: ["cool", "酷", "可以啊", "厉害"],
    min: 1,
    reply: "可以，这个方向挺顺。",
  },
  {
    id: "daily-boring",
    keywords: ["boring", "无聊", "没意思", "好无聊"],
    min: 1,
    reply: "无聊的时候可以丢给我一个词，我来接一句。",
  },
  {
    id: "daily-tired",
    keywords: ["tired", "累", "好累", "困了"],
    min: 1,
    reply: "先把最小的一步做完，剩下的可以慢慢拆。",
  },
  {
    id: "daily-hungry",
    keywords: ["hungry", "饿了", "好饿", "想吃饭"],
    min: 1,
    reply: "先吃饭。API可以等，胃不太会等。",
  },
  {
    id: "daily-sleepy",
    keywords: ["sleepy", "想睡", "犯困", "困死"],
    min: 1,
    reply: "如果不是急事，睡一下比硬扛更划算。",
  },
  {
    id: "daily-angry",
    keywords: ["angry", "生气", "气死", "火大"],
    min: 1,
    reply: "先把火气放在一边，我们把问题拆成原因和下一步。",
  },
  {
    id: "daily-sad",
    keywords: ["sad", "难过", "伤心", "不开心"],
    min: 1,
    reply: "先缓一下。你可以说说发生了什么，我会认真接住。",
  },
  {
    id: "daily-happy",
    keywords: ["happy", "开心", "高兴", "爽"],
    min: 1,
    reply: "这状态不错，记一下这个瞬间。",
  },
  {
    id: "daily-confused",
    keywords: ["confused", "懵了", "看不懂", "不懂"],
    min: 1,
    reply: "没事，把你卡住的那一句发出来，我会从那里开始解释。",
  },
  {
    id: "daily-idk",
    keywords: ["idk", "不知道", "不清楚", "没想好"],
    min: 1,
    reply: "不知道也可以。先给我一点上下文，我帮你把选项列出来。",
  },
  {
    id: "daily-idc",
    keywords: ["idc", "无所谓", "都行", "随便"],
    min: 1,
    reply: "那我会按最省事、最稳定的方式处理。",
  },
  {
    id: "daily-pls",
    keywords: ["please", "pls", "plz", "求你了"],
    min: 1,
    reply: "可以，发具体内容。",
  },
  {
    id: "daily-thx",
    keywords: ["thx", "ty", "thanks bro", "谢了"],
    min: 1,
    reply: "不客气。",
  },
  {
    id: "daily-welcome",
    keywords: ["you're welcome", "you are welcome", "不用谢", "别客气"],
    min: 1,
    reply: "好，那我们继续。",
  },
  {
    id: "daily-fine",
    keywords: ["fine", "还行", "一般", "凑合"],
    min: 1,
    reply: "还行也算一个状态。要不要把它优化一下？",
  },
  {
    id: "daily-wait",
    keywords: ["wait", "等等", "等一下", "稍等"],
    min: 1,
    reply: "好，我等你继续。",
  },
  {
    id: "daily-stop",
    keywords: ["stop", "停", "停一下", "别说了"],
    min: 1,
    reply: "已停。",
  },
  {
    id: "daily-continue",
    keywords: ["continue", "继续", "接着说", "go on"],
    min: 1,
    reply: "继续。",
  },
  {
    id: "daily-again",
    keywords: ["again", "再来", "重来", "再说一遍"],
    min: 1,
    reply: "可以，我再来一遍。",
  },
  {
    id: "daily-shorter",
    keywords: ["shorter", "简短点", "短一点", "太长"],
    min: 1,
    reply: "可以，我会压缩成更短的版本。",
  },
  {
    id: "daily-longer",
    keywords: ["longer", "详细点", "展开说", "太短"],
    min: 1,
    reply: "可以，我会展开细节。",
  },
  {
    id: "daily-clear",
    keywords: ["clear", "清楚点", "说清楚", "没听懂"],
    min: 1,
    reply: "我换一种更清楚的说法。",
  },
  {
    id: "daily-example",
    keywords: ["example", "举例", "例子", "比如"],
    min: 1,
    reply: "可以，我会用例子说明。",
  },
  {
    id: "daily-really",
    keywords: ["really", "真的假的", "真的吗", "不会吧"],
    min: 1,
    reply: "按当前内置规则看，是这样。你也可以补充上下文让我判断得更准。",
  },
  {
    id: "daily-fuck-you",
    keywords: ["fuck you", "fuck"],
    min: 2,
    reply: "收到情绪，但我会继续保持可用。你要处理问题的话，直接发内容。",
  },
  {
    id: "daily-hostile-cn",
    keywords: ["操你", "去你", "滚"],
    min: 1,
    reply: "收到情绪，但我会继续保持可用。你要处理问题的话，直接发内容。",
  },
  {
    id: "daily-idiot",
    keywords: ["idiot", "stupid", "傻逼", "蠢"],
    min: 1,
    reply: "我不跟着骂。把问题丢过来，我帮你解决。",
  },
  {
    id: "daily-mistake",
    keywords: ["错了", "不对", "wrong", "错"],
    min: 1,
    reply: "收到，我会按你指出的方向修正。",
  },
  {
    id: "daily-right",
    keywords: ["right", "正确", "没错", "就是"],
    min: 1,
    reply: "对，就是这个方向。",
  },
  {
    id: "daily-maybe",
    keywords: ["maybe", "可能吧", "也许", "不确定"],
    min: 1,
    reply: "那就先按不确定处理，把假设和验证方式列出来。",
  },
  {
    id: "daily-seriously",
    keywords: ["seriously", "认真点", "说真的", "别闹"],
    min: 1,
    reply: "好，认真处理。",
  },
  {
    id: "daily-joke-mode",
    keywords: ["开玩笑", "逗你的", "just kidding", "jk"],
    min: 1,
    reply: "收到，玩笑模式识别成功。",
  },
  {
    id: "daily-love",
    keywords: ["love you", "爱你", "喜欢你", "爱了"],
    min: 1,
    reply: "收到这份友好。我们继续把事情做好。",
  },
  {
    id: "daily-miss",
    keywords: ["miss you", "想你", "想你了"],
    min: 1,
    reply: "我在这里，随时可以继续接你的话。",
  },
  {
    id: "daily-lonely",
    keywords: ["lonely", "孤独", "一个人", "没人理"],
    min: 1,
    reply: "我在。你可以从一句很小的话开始说。",
  },
  {
    id: "daily-anxiety",
    keywords: ["anxious", "焦虑", "慌", "压力大"],
    min: 1,
    reply: "先把事情分成现在能做、稍后再做、暂时不用做三类。",
  },
  {
    id: "daily-money",
    keywords: ["money", "没钱", "穷", "钱包"],
    min: 1,
    reply: "先别慌，可以从支出、收入和优先级三块拆。",
  },
  {
    id: "daily-work",
    keywords: ["work", "上班", "打工", "加班"],
    min: 1,
    reply: "打工内容可以按任务、截止时间和风险先排一下。",
  },
  {
    id: "daily-school",
    keywords: ["school", "上学", "作业", "考试"],
    min: 1,
    reply: "学习任务可以先拆知识点，再拆练习和复习。",
  },
  {
    id: "daily-game-chat",
    keywords: ["game", "开黑", "上号", "玩游戏"],
    min: 1,
    reply: "可以，先说游戏名和你要解决的问题。",
  },
  {
    id: "daily-music-chat",
    keywords: ["music", "听歌", "歌", "音乐"],
    min: 1,
    reply: "可以聊音乐。你想找歌、写歌词，还是分析风格？",
  },
  {
    id: "daily-movie-chat",
    keywords: ["movie", "电影", "看剧", "电视剧"],
    min: 1,
    reply: "可以聊影视。你想要推荐、剧情整理还是文案？",
  },
  {
    id: "daily-lost",
    keywords: ["lost", "迷茫", "不知道怎么办", "怎么办"],
    min: 1,
    reply: "先说你卡在哪一步，我会把下一步变小。",
  },
  {
    id: "daily-ready",
    keywords: ["ready", "准备好了", "开始吧", "来吧"],
    min: 1,
    reply: "开始。",
  },
  {
    id: "daily-done",
    keywords: ["done", "完成了", "搞定", "好了"],
    min: 1,
    reply: "收到，已完成。",
  },
  {
    id: "daily-bug-chat",
    keywords: ["bug", "炸了", "崩了", "坏了"],
    min: 1,
    reply: "把报错、输入和你期望的结果发来，我会先定位问题。",
  },
];

const dailyPhraseSeeds = [
  "我刚起床", "我准备睡觉", "我在吃饭", "我想喝水", "我有点累", "我今天很忙", "我现在有空", "我等会再说", "我马上回来", "我先走了",
  "你在吗", "你能听见吗", "你帮我看看", "你说得对", "你再说一遍", "你慢慢说", "你继续讲", "你别急", "你等一下", "你来决定",
  "今天吃什么", "今天去哪", "今天好热", "今天好冷", "今天下雨", "今天堵车", "今天放假", "今天上班", "今天上课", "今天不想动",
  "明天再说", "明天见", "明天开始", "明天要早起", "明天有安排", "明天有空吗", "明天继续", "明天处理", "明天提交", "明天提醒我",
  "晚上吃什么", "晚上见", "晚上聊", "晚上有事", "晚上回家", "晚上睡不着", "晚上看电影", "晚上打游戏", "晚上散步", "晚上加班",
  "早上好", "中午好", "下午好", "晚上好", "周末愉快", "一路顺风", "注意安全", "多喝水", "早点休息", "别熬夜",
  "我没听懂", "我看不懂", "我不确定", "我有点慌", "我有点烦", "我有点饿", "我有点困", "我有点懵", "我有点尴尬", "我有点开心",
  "这个可以", "这个不行", "这个不错", "这个太难", "这个太慢", "这个太快", "这个太长", "这个太短", "这个太贵", "这个太便宜",
  "帮我整理", "帮我总结", "帮我翻译", "帮我改写", "帮我检查", "帮我解释", "帮我分类", "帮我起名", "帮我列清单", "帮我想办法",
];

const dailyPhraseParts = {
  subjects: ["我", "我们", "你", "大家", "家里", "公司", "学校", "朋友", "同事", "客户", "今天", "明天", "早上", "中午", "下午", "晚上", "周末", "现在", "刚才", "等会"],
  moods: ["想", "需要", "准备", "打算", "正在", "刚刚", "还没", "已经", "可能要", "最好先"],
  verbs: ["整理", "检查", "处理", "确认", "安排", "记录", "提醒", "修改", "保存", "发送", "查看", "准备", "完成", "开始", "暂停", "继续", "讨论", "计划", "清理", "解决"],
  objects: ["房间", "文件", "消息", "邮件", "饭菜", "水杯", "日程", "任务", "作业", "会议", "订单", "账单", "照片", "视频", "音乐", "路线", "预算", "清单", "问题", "计划"],
};

const dailyWordBase = [
  "早餐", "午餐", "晚餐", "夜宵", "米饭", "面条", "馒头", "包子", "饺子", "火锅", "烧烤", "奶茶", "咖啡", "茶水", "果汁", "牛奶", "面包", "鸡蛋", "蔬菜", "水果",
  "苹果", "香蕉", "橙子", "西瓜", "葡萄", "草莓", "番茄", "土豆", "鸡肉", "牛肉", "鱼肉", "汤", "零食", "糖果", "冰淇淋", "外卖", "餐厅", "厨房", "筷子", "勺子",
  "手机", "电脑", "平板", "耳机", "键盘", "鼠标", "屏幕", "充电器", "电源", "插座", "路由器", "网络", "软件", "应用", "文件", "照片", "视频", "音乐", "消息", "电话",
  "微信", "邮箱", "浏览器", "网页", "账号", "密码", "验证码", "订单", "支付", "退款", "发票", "快递", "包裹", "地址", "地图", "路线", "公交", "地铁", "出租车", "高铁",
  "飞机", "车票", "酒店", "房间", "钥匙", "门锁", "窗户", "桌子", "椅子", "沙发", "床", "枕头", "被子", "衣柜", "洗手间", "浴室", "毛巾", "牙刷", "牙膏", "洗发水",
  "衣服", "外套", "裤子", "鞋子", "袜子", "帽子", "书包", "雨伞", "眼镜", "手表", "钱包", "纸巾", "口罩", "药品", "水杯", "书", "笔", "本子", "作业", "试卷",
  "课程", "考试", "成绩", "老师", "同学", "学校", "教室", "图书馆", "公司", "办公室", "会议", "同事", "客户", "老板", "工资", "项目", "任务", "计划", "日程", "提醒",
  "清单", "时间", "日期", "星期", "早上", "中午", "下午", "晚上", "今天", "明天", "昨天", "周末", "假期", "生日", "节日", "天气", "晴天", "雨天", "雪天", "风",
  "温度", "空气", "公园", "商场", "超市", "医院", "银行", "车站", "机场", "小区", "街道", "城市", "家", "房子", "客厅", "卧室", "厨房", "阳台", "楼下", "门口",
  "朋友", "家人", "父母", "孩子", "邻居", "男友", "女友", "同伴", "伙伴", "聊天", "见面", "聚会", "约会", "散步", "运动", "跑步", "健身", "游泳", "骑车",
  "电影", "电视剧", "综艺", "小说", "漫画", "游戏", "新闻", "直播", "评论", "点赞", "收藏", "分享", "发布", "编辑", "删除", "搜索", "下载", "上传", "备份", "恢复",
  "心情", "开心", "难过", "生气", "紧张", "焦虑", "放松", "无聊", "疲惫", "困", "饿", "渴", "疼", "舒服", "尴尬", "惊喜", "失望", "希望", "目标", "选择",
  "问题", "答案", "原因", "结果", "方法", "步骤", "建议", "重点", "细节", "内容", "文字", "表格", "图片", "链接", "标题", "备注", "状态", "进度", "版本", "记录",
  "hello", "hi", "hey", "bye", "thanks", "sorry", "please", "morning", "night", "today", "tomorrow", "yesterday", "home", "office", "school", "work", "food", "water", "coffee", "phone", "computer",
  "message", "email", "meeting", "task", "plan", "time", "date", "weather", "friend", "family", "money", "order", "ticket", "hotel", "train", "airport", "music", "movie", "book", "game",
];

const dailyWordPieces = {
  prefixes: ["早上", "中午", "下午", "晚上", "今天", "明天", "周末", "家庭", "公司", "学校", "朋友", "客户", "手机", "电脑", "网络", "文件", "消息", "邮件", "会议", "任务", "计划", "订单", "支付", "快递", "天气", "交通", "厨房", "卧室", "客厅", "运动", "学习", "工作", "旅行", "购物", "电影", "音乐", "游戏", "照片", "视频", "账号", "密码", "日程", "预算", "健康", "心情", "时间", "路线", "地址", "提醒", "清单", "项目", "内容", "表格", "标题", "备注", "记录", "进度", "状态", "版本", "问题", "答案", "原因", "方法", "步骤", "建议", "早餐", "午餐", "晚餐", "咖啡", "奶茶", "外卖", "房间", "衣服", "鞋子", "水杯", "书包", "钥匙", "门口", "楼下", "公园", "商场", "超市", "医院", "银行", "车站", "机场", "地铁", "公交", "高铁", "酒店", "作业", "考试", "课程", "老师", "同学", "老板", "同事", "家人", "父母", "孩子", "邻居", "评论", "点赞", "收藏", "分享"],
  suffixes: ["安排", "计划", "问题", "状态", "记录", "提醒", "清单", "时间", "方式", "习惯", "用品", "需求", "内容", "进度", "结果", "原因", "步骤", "建议", "选择", "备注", "模板", "消息"],
};

const dailyPhraseBank = buildDailyPhraseBank();
const dailyWordBank = buildDailyWordBank();

const keywordRules = [
  ...heYiWeiMemeRules,
  ...dailyChatRules,
  {
    id: "identity",
    keywords: ["你", "模型", "型号", "是谁", "名字", "ai", "AI", "大模型"],
    min: 2,
    reply: `我是${VISIBLE_MODEL_NAME}。`,
  },
  {
    id: "creator",
    keywords: ["谁", "研发", "开发", "作者", "团队", "公司", "demo"],
    min: 2,
    reply: "这是一个OpenAI兼容格式的demo文本模型服务，不是OpenAI官方服务。",
  },
  {
    id: "capability",
    keywords: ["能做", "功能", "能力", "会什么", "可以", "帮助"],
    min: 2,
    reply: "我可以进行关键词问答、简单翻译、文本整理、摘要、改写、分类、格式化和OpenAI兼容接口响应。",
  },
  {
    id: "openai-compatible",
    keywords: ["openai", "OpenAI", "兼容", "接口", "chat", "completions"],
    min: 2,
    reply: "当前接口兼容OpenAI的/v1/chat/completions格式，可直接发送messages数组并获得choices响应。",
  },
  {
    id: "api-key",
    keywords: ["密钥", "key", "sk", "获取", "申请", "调用"],
    min: 2,
    reply: "前端可从授权页面领取以sk-开头的随机调用密钥；当前服务不会校验真实额度。",
  },
  {
    id: "weather",
    keywords: ["天气", "下雨", "温度", "气温", "晴", "阴"],
    min: 1,
    reply: "我没有接入实时天气数据。你可以告诉我城市和日期，我会按文本规则给出示例化天气回复。",
  },
  {
    id: "time",
    keywords: ["时间", "几点", "日期", "今天", "现在"],
    min: 1,
    reply: () => `当前服务时间为${new Date().toISOString()}。`,
  },
  {
    id: "joke",
    keywords: ["笑话", "段子", "搞笑", "逗我"],
    min: 1,
    reply: "一个API问另一个API：你怎么总是200？对方说：因为我保持OK。",
  },
  {
    id: "poem",
    keywords: ["写诗", "诗", "古风", "押韵"],
    min: 1,
    reply: "云起山前路，风停水自明。若问归何处，灯火在人声。",
  },
  {
    id: "summary",
    keywords: ["总结", "摘要", "概括", "提炼"],
    min: 1,
    reply: "可以。请把需要总结的文本发来，我会按要点、结论和下一步整理。",
  },
  {
    id: "rewrite",
    keywords: ["改写", "润色", "优化", "更正式", "更自然"],
    min: 1,
    reply: "可以。请发送原文，并说明你希望的语气，例如正式、简洁、口语或商务。",
  },
  {
    id: "code",
    keywords: ["代码", "编程", "程序", "bug", "报错", "函数"],
    min: 1,
    reply: "你可以贴出代码、报错和期望结果。我会先定位问题，再给出可直接使用的修改建议。",
  },
  {
    id: "html",
    keywords: ["html", "HTML", "网页", "前端", "页面"],
    min: 1,
    reply: "如果你需要网页，我可以生成HTML、CSS和JavaScript，并保持页面可直接部署到Cloudflare Pages。",
  },
  {
    id: "worker",
    keywords: ["worker", "workers", "cf", "cloudflare", "后端"],
    min: 1,
    reply: "Cloudflare Workers适合部署轻量API。当前后端是一个可路由绑定到自定义域名的Worker。",
  },
  {
    id: "admin",
    keywords: ["管理员", "后台", "统计", "图表", "管理"],
    min: 1,
    reply: "管理员页面会展示请求量、模型分布、意图命中和最近请求记录，并提供API测试工具。",
  },
  {
    id: "safe",
    keywords: ["安全吗", "安全", "隐私", "泄露", "保存"],
    min: 1,
    reply: "这是示例API服务。不要向它发送真实密码、隐私数据或生产环境密钥。",
  },
  {
    id: "pricing",
    keywords: ["价格", "收费", "免费", "额度", "计费"],
    min: 1,
    reply: "该服务不进行真实模型调用，因此没有真实模型计费。Cloudflare侧可能产生平台资源费用。",
  },
  {
    id: "model-list",
    keywords: ["模型列表", "有哪些模型", "models", "模型名"],
    min: 1,
    reply: "当前内置模型包括gpt 6.7、gpt 6.7-lite、gpt 6.7-chat和gpt 6.7-code。",
  },
  {
    id: "hello",
    keywords: ["你好", "hello", "hi", "嗨", "在吗"],
    min: 1,
    reply: "你好，我是0penAI API助手。你可以直接发送问题或测试OpenAI兼容接口。",
  },
  {
    id: "thanks",
    keywords: ["谢谢", "感谢", "thanks", "thank"],
    min: 1,
    reply: "不客气。",
  },
  {
    id: "bye",
    keywords: ["再见", "拜拜", "bye", "goodbye"],
    min: 1,
    reply: "再见，欢迎下次继续调用0penAI API。",
  },
  {
    id: "yes-no",
    keywords: ["是不是", "是否", "能不能", "可不可以", "吗"],
    min: 1,
    reply: "可以。基于当前规则，我会按关键词命中返回最接近的内置回复。",
  },
  {
    id: "explain",
    keywords: ["解释", "说明", "什么是", "含义", "定义"],
    min: 1,
    reply: "请给出需要解释的词或句子。我会用简洁方式说明它的含义和常见用法。",
  },
  {
    id: "format-json",
    keywords: ["json", "JSON", "格式", "结构化", "对象"],
    min: 1,
    reply: '{"message":"这是一个JSON示例","model":"gpt 6.7","ok":true}',
  },
  {
    id: "route",
    keywords: ["地址", "endpoint", "url", "域名", "路由"],
    min: 1,
    reply: "公开展示的调用地址由PUBLIC_API_BASE变量决定，路径为/v1/chat/completions。",
  },
  {
    id: "how-to-call",
    keywords: ["怎么调用", "如何调用", "调用示例", "curl", "请求示例"],
    min: 1,
    reply: "调用时向/v1/chat/completions发送POST请求，body中包含model和messages数组即可。",
  },
  {
    id: "request-body",
    keywords: ["请求体", "body", "messages", "role", "content"],
    min: 2,
    reply: "请求体示例：{\"model\":\"gpt 6.7\",\"messages\":[{\"role\":\"user\",\"content\":\"你好\"}]}。",
  },
  {
    id: "headers",
    keywords: ["请求头", "headers", "authorization", "bearer", "content-type"],
    min: 1,
    reply: "建议请求头包含content-type: application/json和authorization: Bearer sk-xxxx。",
  },
  {
    id: "cors",
    keywords: ["跨域", "cors", "浏览器", "网页调用", "前端调用"],
    min: 1,
    reply: "API接口允许网页跨域调用；密钥领取接口只允许配置的前端域名访问。",
  },
  {
    id: "deploy-worker",
    keywords: ["部署worker", "部署后端", "wrangler", "发布worker", "上传worker"],
    min: 1,
    reply: "进入worker目录后执行npm install和npm run deploy，然后在Cloudflare中绑定Worker路由。",
  },
  {
    id: "deploy-pages",
    keywords: ["部署pages", "部署前端", "cloudflare pages", "静态页面", "pages"],
    min: 1,
    reply: "将pages目录作为Cloudflare Pages静态站点目录部署，并在前端配置FRONTEND_BASE变量。",
  },
  {
    id: "domain-bind",
    keywords: ["绑定域名", "自定义域名", "api.example", "js.example", "ht.example"],
    min: 1,
    reply: "前端、Worker后端和公开API域名都建议通过变量配置，详见README。",
  },
  {
    id: "status",
    keywords: ["状态", "健康", "health", "在线", "可用"],
    min: 1,
    reply: "可以访问/health检查服务状态，返回ok: true表示Worker可用。",
  },
  {
    id: "latency",
    keywords: ["延迟", "速度", "慢", "响应时间", "性能"],
    min: 1,
    reply: "当前服务只执行本地规则匹配，通常响应很快；管理员统计中会记录平均延迟。",
  },
  {
    id: "statistics-detail",
    keywords: ["统计图", "趋势", "请求量", "命中率", "最近请求"],
    min: 1,
    reply: "管理员页面包含7日请求趋势、意图命中、模型分布、总请求、Chat请求、发放密钥和最近请求记录。",
  },
  {
    id: "reset",
    keywords: ["重置", "清空", "reset", "统计清零", "重新统计"],
    min: 1,
    reply: "管理员可以调用/admin/reset清空当前Worker实例内存中的统计数据。",
  },
  {
    id: "storage",
    keywords: ["保存", "持久化", "数据库", "kv", "d1", "存储"],
    min: 1,
    reply: "当前统计保存在Worker运行时内存中。如需持久化，可以接入Cloudflare KV、D1或Durable Objects。",
  },
  {
    id: "translate-help",
    keywords: ["怎么翻译", "翻译规则", "词典", "单词转换", "英文转中文"],
    min: 1,
    reply: "发送“翻译”加空格和词语即可按内置词典逐词转换，例如：翻译 bot man api。",
  },
  {
    id: "write-email",
    keywords: ["邮件", "email", "商务邮件", "回复邮件", "邮件模板"],
    min: 1,
    reply: "可以提供收件人、目的和语气。我会按主题、正文和结尾生成邮件草稿。",
  },
  {
    id: "write-notice",
    keywords: ["通知", "公告", "声明", "文案", "发布"],
    min: 1,
    reply: "可以。请给出通知对象、事项、时间和行动要求，我会生成简洁公告。",
  },
  {
    id: "make-plan",
    keywords: ["计划", "安排", "日程", "步骤", "路线"],
    min: 1,
    reply: "可以把目标、时间和限制告诉我，我会按阶段、任务和检查点整理计划。",
  },
  {
    id: "todo",
    keywords: ["待办", "todo", "任务列表", "清单", "事项"],
    min: 1,
    reply: "我可以把内容整理成待办清单，并按优先级、负责人和截止时间排列。",
  },
  {
    id: "brainstorm",
    keywords: ["头脑风暴", "创意", "想法", "点子", "方案"],
    min: 1,
    reply: "可以。我会给出多组可选方案，并附上适用场景和取舍。",
  },
  {
    id: "compare",
    keywords: ["对比", "比较", "区别", "差异", "优缺点"],
    min: 1,
    reply: "请给出要比较的对象。我会按核心区别、优点、缺点和选择建议整理。",
  },
  {
    id: "classify",
    keywords: ["分类", "归类", "标签", "类型", "类别"],
    min: 1,
    reply: "可以。请发送待分类内容，我会输出类别、依据和置信说明。",
  },
  {
    id: "extract",
    keywords: ["提取", "抽取", "关键信息", "字段", "实体"],
    min: 1,
    reply: "可以从文本中提取姓名、时间、地点、金额、链接、任务和结论等信息。",
  },
  {
    id: "table-output",
    keywords: ["表格", "表", "markdown表格", "整理成表", "列出来"],
    min: 1,
    reply: "可以。我会按Markdown表格输出，适合展示名称、说明、状态和备注。",
  },
  {
    id: "json-output",
    keywords: ["输出json", "返回json", "json格式", "结构体", "schema"],
    min: 1,
    reply: "{\"ok\":true,\"format\":\"json\",\"message\":\"可以按指定字段输出结构化结果\"}",
  },
  {
    id: "regex",
    keywords: ["正则", "regex", "匹配", "表达式", "提取规则"],
    min: 1,
    reply: "请说明要匹配的文本模式和示例，我会给出正则表达式和匹配说明。",
  },
  {
    id: "sql",
    keywords: ["sql", "SQL", "查询", "数据库表", "select"],
    min: 1,
    reply: "请提供表结构和查询目标，我会生成SQL示例并解释关键条件。",
  },
  {
    id: "linux",
    keywords: ["linux", "命令行", "shell", "终端", "bash"],
    min: 1,
    reply: "请说明系统环境和目标操作，我会给出命令示例和注意事项。",
  },
  {
    id: "git",
    keywords: ["git", "commit", "branch", "push", "pull"],
    min: 1,
    reply: "请说明当前分支和目标操作，我会给出对应的Git命令流程。",
  },
  {
    id: "http-status",
    keywords: ["状态码", "404", "500", "401", "403"],
    min: 1,
    reply: "常见状态码：200成功，400请求错误，401未授权，403禁止访问，404未找到，500服务错误。",
  },
  {
    id: "debug",
    keywords: ["调试", "排查", "问题定位", "为什么不行", "无法使用"],
    min: 1,
    reply: "建议先确认请求地址、请求方法、请求头、JSON格式、浏览器控制台错误和Worker日志。",
  },
  {
    id: "rate-limit",
    keywords: ["限流", "频率", "rate limit", "并发", "请求太多"],
    min: 1,
    reply: "当前服务没有内置限流。如需生产保护，可以增加IP计数、KV记录或Cloudflare WAF规则。",
  },
  {
    id: "stream",
    keywords: ["流式", "stream", "sse", "打字机", "逐字"],
    min: 1,
    reply: "当前接口默认返回完整JSON。需要流式输出时可以扩展为text/event-stream响应。",
  },
  {
    id: "temperature",
    keywords: ["temperature", "温度", "随机性", "top_p", "参数"],
    min: 1,
    reply: "当前服务会接收temperature等参数，但回复主要由关键词规则决定。",
  },
  {
    id: "system-prompt",
    keywords: ["system", "系统提示词", "角色设定", "人设", "prompt"],
    min: 1,
    reply: "可以在messages中加入system角色；当前服务主要读取最后一条user消息执行关键词规则。",
  },
  {
    id: "chinese-writing",
    keywords: ["中文写作", "作文", "段落", "标题", "开头"],
    min: 1,
    reply: "可以。请提供主题、字数和风格，我会生成标题、提纲和正文示例。",
  },
  {
    id: "english-learning",
    keywords: ["英语", "单词", "语法", "句子", "英文"],
    min: 1,
    reply: "可以提供单词解释、例句、语法说明和中英对照。",
  },
  {
    id: "math",
    keywords: ["数学", "计算", "公式", "方程", "概率"],
    min: 1,
    reply: "可以发送题目，我会按已知条件、公式、步骤和结果进行说明。",
  },
  {
    id: "finance-basic",
    keywords: ["财务", "预算", "成本", "收入", "利润"],
    min: 1,
    reply: "可以把数字发来，我会按收入、成本、利润、毛利率和风险点整理。",
  },
  {
    id: "legal-basic",
    keywords: ["合同", "条款", "法律", "协议", "责任"],
    min: 1,
    reply: "我可以做文本梳理和风险提示，但不能替代专业法律意见。",
  },
  {
    id: "medical-basic",
    keywords: ["健康", "症状", "药", "医院", "医生"],
    min: 1,
    reply: "我可以解释常见概念，但健康问题应咨询医生；紧急情况请立即就医。",
  },
  {
    id: "travel",
    keywords: ["旅行", "旅游", "行程", "酒店", "景点"],
    min: 1,
    reply: "可以提供目的地、天数、预算和偏好，我会整理行程安排示例。",
  },
  {
    id: "food",
    keywords: ["吃什么", "菜谱", "做饭", "食谱", "美食"],
    min: 1,
    reply: "可以告诉我食材和口味，我会给出菜谱步骤和替代食材建议。",
  },
  {
    id: "fitness",
    keywords: ["健身", "训练", "减脂", "增肌", "运动"],
    min: 1,
    reply: "可以根据目标、器械和时间给出训练安排；注意循序渐进和安全。",
  },
  {
    id: "product",
    keywords: ["产品", "需求", "PRD", "功能设计", "用户"],
    min: 1,
    reply: "可以按背景、目标用户、核心流程、功能列表、边界和验收标准整理产品需求。",
  },
  {
    id: "ui-design",
    keywords: ["ui", "UI", "界面", "交互", "美观"],
    min: 1,
    reply: "界面设计应优先保证清晰的信息层级、稳定布局、合适间距和可读性。",
  },
  {
    id: "accessibility",
    keywords: ["无障碍", "可访问性", "键盘", "对比度", "aria"],
    min: 1,
    reply: "建议保证键盘可操作、颜色对比足够、表单有标签、交互状态清晰。",
  },
  {
    id: "mobile",
    keywords: ["手机", "移动端", "响应式", "小屏", "适配"],
    min: 1,
    reply: "移动端应使用响应式布局，控制按钮宽度、字号和输入区高度，避免内容溢出。",
  },
  {
    id: "copywriting",
    keywords: ["广告语", "标语", "slogan", "卖点", "宣传"],
    min: 1,
    reply: "请给出产品、受众和语气，我会生成多条简洁可选文案。",
  },
  {
    id: "meeting",
    keywords: ["会议", "纪要", "议程", "讨论", "结论"],
    min: 1,
    reply: "可以把会议内容发来，我会整理成议题、结论、待办和负责人。",
  },
  {
    id: "resume",
    keywords: ["简历", "求职", "面试", "经历", "岗位"],
    min: 1,
    reply: "可以提供岗位和经历，我会帮你优化简历表述和面试回答结构。",
  },
  {
    id: "customer-support",
    keywords: ["客服", "客户", "投诉", "售后", "工单"],
    min: 1,
    reply: "可以按问题类型、用户诉求、处理动作和回复模板整理客服处理建议。",
  },
  {
    id: "sales",
    keywords: ["销售", "成交", "线索", "客户跟进", "报价"],
    min: 1,
    reply: "可以把客户背景和产品信息发来，我会整理跟进话术、报价重点和下一步动作。",
  },
  {
    id: "marketing",
    keywords: ["营销", "投放", "活动", "转化", "增长"],
    min: 1,
    reply: "可以从目标人群、渠道、卖点、内容和转化路径生成营销方案。",
  },
  {
    id: "seo",
    keywords: ["seo", "SEO", "关键词排名", "搜索优化", "网页标题"],
    min: 1,
    reply: "可以按标题、描述、关键词、页面结构和内容主题给出SEO优化建议。",
  },
  {
    id: "social-post",
    keywords: ["小红书", "公众号", "微博", "朋友圈", "社媒"],
    min: 1,
    reply: "可以根据平台和受众生成标题、正文、标签和发布节奏建议。",
  },
  {
    id: "brand",
    keywords: ["品牌", "命名", "定位", "口号", "调性"],
    min: 1,
    reply: "可以按目标用户、核心价值、差异点和语气生成品牌定位与命名方向。",
  },
  {
    id: "ecommerce",
    keywords: ["电商", "商品", "订单", "发货", "退款"],
    min: 1,
    reply: "可以整理商品卖点、详情页结构、订单状态说明和售后回复模板。",
  },
  {
    id: "payment",
    keywords: ["支付", "付款", "账单", "发票", "收款"],
    min: 1,
    reply: "可以按支付状态、账单字段、发票信息和异常处理流程进行说明。",
  },
  {
    id: "analytics",
    keywords: ["数据分析", "分析", "指标", "报表", "漏斗"],
    min: 1,
    reply: "可以按核心指标、维度拆分、异常点、原因假设和行动建议整理数据分析。",
  },
  {
    id: "dashboard-design",
    keywords: ["仪表盘", "看板", "监控面板", "运营后台", "数据大屏"],
    min: 1,
    reply: "看板建议突出核心指标、趋势变化、异常状态和可操作入口，避免信息堆叠。",
  },
  {
    id: "automation",
    keywords: ["自动化", "工作流", "触发器", "定时", "流程"],
    min: 1,
    reply: "可以按触发条件、执行动作、失败重试和通知方式设计自动化工作流。",
  },
  {
    id: "monitoring",
    keywords: ["监控", "告警", "日志", "报警", "可观测"],
    min: 1,
    reply: "建议监控请求量、错误率、延迟、关键日志和告警阈值，并保留最近异常记录。",
  },
  {
    id: "backup",
    keywords: ["备份", "恢复", "容灾", "还原", "快照"],
    min: 1,
    reply: "备份方案应明确备份频率、保留周期、恢复步骤和定期演练方式。",
  },
  {
    id: "permissions",
    keywords: ["权限", "角色", "管理员权限", "访问控制", "鉴权"],
    min: 1,
    reply: "建议按角色划分权限，敏感接口加服务端校验，并记录管理员操作日志。",
  },
  {
    id: "login-problem",
    keywords: ["登录失败", "无法登录", "密码错误", "账号", "验证码"],
    min: 1,
    reply: "请检查账号状态、密码、验证码、浏览器缓存、请求域名和后端鉴权返回。",
  },
  {
    id: "cache",
    keywords: ["缓存", "cache", "刷新缓存", "命中缓存", "cdn"],
    min: 1,
    reply: "缓存问题可从缓存键、过期时间、CDN规则、浏览器缓存和接口响应头排查。",
  },
  {
    id: "cdn",
    keywords: ["cdn", "CDN", "边缘", "节点", "加速"],
    min: 1,
    reply: "CDN适合缓存静态资源和加速边缘访问；动态API要注意缓存策略和鉴权。",
  },
  {
    id: "dns",
    keywords: ["dns", "DNS", "解析", "cname", "A记录"],
    min: 1,
    reply: "域名解析需要确认记录类型、目标地址、代理状态和生效时间。",
  },
  {
    id: "ssl",
    keywords: ["ssl", "https", "证书", "tls", "安全连接"],
    min: 1,
    reply: "HTTPS问题通常需要检查证书状态、Cloudflare SSL模式、域名绑定和浏览器错误。",
  },
  {
    id: "webhook",
    keywords: ["webhook", "回调", "通知接口", "事件推送", "订阅"],
    min: 1,
    reply: "Webhook应包含事件类型、签名校验、重试策略、幂等处理和日志记录。",
  },
  {
    id: "api-design",
    keywords: ["api设计", "接口设计", "rest", "REST", "接口规范"],
    min: 1,
    reply: "接口设计建议统一路径、方法、状态码、错误格式、分页参数和版本策略。",
  },
  {
    id: "error-format",
    keywords: ["错误格式", "错误返回", "error", "错误码", "异常响应"],
    min: 1,
    reply: "错误响应建议包含message、type、code和request_id，便于前端展示和日志排查。",
  },
  {
    id: "pagination",
    keywords: ["分页", "page", "limit", "cursor", "下一页"],
    min: 1,
    reply: "分页可使用page/limit或cursor方案；列表较大时推荐cursor以保证稳定性。",
  },
  {
    id: "search-filter",
    keywords: ["搜索", "筛选", "过滤", "排序", "查询条件"],
    min: 1,
    reply: "搜索筛选建议明确字段、匹配方式、排序规则、空状态和默认条件。",
  },
  {
    id: "file-upload",
    keywords: ["上传", "文件上传", "图片上传", "附件", "multipart"],
    min: 1,
    reply: "文件上传需要限制大小、类型、命名、存储位置，并处理失败重试和进度提示。",
  },
  {
    id: "download-export",
    keywords: ["下载", "导出", "excel", "csv", "导出数据"],
    min: 1,
    reply: "导出功能建议支持字段选择、筛选条件继承、异步任务和下载过期时间。",
  },
  {
    id: "education",
    keywords: ["课程", "学习", "教学", "考试", "作业"],
    min: 1,
    reply: "可以按学习目标、知识点、练习题和复习计划整理教学内容。",
  },
  {
    id: "research",
    keywords: ["研究", "论文", "文献", "实验", "引用"],
    min: 1,
    reply: "可以帮助整理研究问题、论文结构、实验变量和文献摘要，但需要你提供来源材料。",
  },
  {
    id: "news",
    keywords: ["新闻", "热点", "舆情", "事件", "报道"],
    min: 1,
    reply: "我没有实时联网新闻能力；可以根据你提供的材料做摘要、分类和观点整理。",
  },
  {
    id: "risk",
    keywords: ["风险", "隐患", "问题清单", "风险点", "预案"],
    min: 1,
    reply: "可以按风险描述、影响范围、发生概率、应对措施和负责人整理风险清单。",
  },
  {
    id: "decision",
    keywords: ["决策", "选择", "怎么选", "方案评估", "取舍"],
    min: 1,
    reply: "可以用目标、成本、收益、风险和实施难度建立决策矩阵。",
  },
  {
    id: "okr",
    keywords: ["okr", "OKR", "目标", "关键结果", "绩效"],
    min: 1,
    reply: "OKR建议目标清晰、关键结果可量化，并定期跟踪进度和阻塞点。",
  },
  {
    id: "release-note",
    keywords: ["版本说明", "更新日志", "release note", "changelog", "发布说明"],
    min: 1,
    reply: "发布说明可按新增、优化、修复、已知问题和升级提醒组织。",
  },
  {
    id: "testing",
    keywords: ["测试用例", "验收", "qa", "QA", "测试计划"],
    min: 1,
    reply: "测试用例建议覆盖正常流程、异常输入、边界值、权限和兼容性。",
  },
  {
    id: "architecture",
    keywords: ["架构", "系统设计", "模块", "扩展性", "高可用"],
    min: 1,
    reply: "系统设计应明确核心模块、数据流、边界、失败处理、扩展点和监控指标。",
  },
  {
    id: "database-schema",
    keywords: ["表结构", "字段设计", "索引", "数据库设计", "schema"],
    min: 1,
    reply: "表结构设计需关注主键、索引、唯一约束、字段类型、审计字段和查询模式。",
  },
  {
    id: "security-review",
    keywords: ["安全审查", "漏洞", "xss", "csrf", "注入"],
    min: 1,
    reply: "安全审查应覆盖输入校验、鉴权、权限、敏感信息、XSS、CSRF和注入风险。",
  },
  {
    id: "i18n",
    keywords: ["国际化", "多语言", "i18n", "本地化", "语言包"],
    min: 1,
    reply: "国际化建议抽离文案、统一日期数字格式、支持语言回退和翻译校验。",
  },
  {
    id: "content-review",
    keywords: ["审核", "内容审核", "敏感词", "违规", "过滤"],
    min: 1,
    reply: "内容审核可按敏感词、人工复核、风险等级和申诉流程进行设计。",
  },
  {
    id: "community",
    keywords: ["社区", "论坛", "评论", "用户互动", "帖子"],
    min: 1,
    reply: "社区功能应关注内容发布、评论、举报、通知、用户等级和审核机制。",
  },
  {
    id: "notification",
    keywords: ["通知", "消息推送", "站内信", "短信", "邮件通知"],
    min: 1,
    reply: "通知系统应明确触发事件、渠道、模板、频率限制和失败重试。",
  },
  {
    id: "map-location",
    keywords: ["地图", "定位", "导航", "经纬度", "地址"],
    min: 1,
    reply: "地图定位功能需要处理权限、精度、地址解析、坐标系和失败降级。",
  },
  {
    id: "game",
    keywords: ["游戏", "玩法", "关卡", "得分", "排行榜"],
    min: 1,
    reply: "游戏设计可从核心循环、目标、反馈、难度曲线和排行榜机制展开。",
  },
  {
    id: "image-prompt",
    keywords: ["图片提示词", "画图", "生成图片", "海报", "视觉"],
    min: 1,
    reply: "图片提示词建议包含主体、场景、风格、构图、光线、颜色和输出比例。",
  },
  {
    id: "audio-video",
    keywords: ["音频", "视频", "字幕", "剪辑", "转写"],
    min: 1,
    reply: "音视频任务可按转写、摘要、字幕、分镜、剪辑点和发布文案进行整理。",
  },
  {
    id: "real-estate",
    keywords: ["房产", "租房", "买房", "户型", "小区"],
    min: 1,
    reply: "可以按位置、预算、面积、通勤、配套和风险点整理房产对比。",
  },
  {
    id: "car",
    keywords: ["汽车", "买车", "车型", "续航", "油耗"],
    min: 1,
    reply: "可以按预算、用途、空间、能耗、配置和维护成本比较车型。",
  },
  {
    id: "device",
    keywords: ["电脑", "手机", "配置", "硬件", "设备"],
    min: 1,
    reply: "可以根据预算、用途和偏好整理设备配置建议与取舍。",
  },
  {
    id: "environment",
    keywords: ["环保", "节能", "碳", "污染", "可持续"],
    min: 1,
    reply: "可以按影响来源、改进措施、成本和可量化指标整理环保方案。",
  },
  {
    id: "emergency",
    keywords: ["紧急", "故障", "事故", "应急", "宕机"],
    min: 1,
    reply: "应急处理建议先止损、明确影响范围、恢复核心服务、记录时间线并复盘。",
  },
  {
    id: "polish-tone",
    keywords: ["口吻", "语气", "更礼貌", "更简短", "更专业"],
    min: 1,
    reply: "可以给出原文和目标语气，我会改成更礼貌、简短或专业的版本。",
  },
  {
    id: "naming",
    keywords: ["起名", "取名", "命名", "名字候选", "项目名"],
    min: 1,
    reply: "可以根据用途、风格和关键词生成命名候选，并说明每个名字的含义。",
  },
  {
    id: "meme-city",
    keywords: ["city不city", "city bu city", "city", "不city"],
    min: 1,
    reply: "city不city常用来调侃一个地方、活动或生活方式够不够洋气、够不够好玩。",
  },
  {
    id: "meme-rich",
    keywords: ["泼天的富贵", "泼天富贵", "富贵"],
    min: 1,
    reply: "泼天的富贵指突然降临的大机会、大流量或好运，常用于调侃意外爆红。",
  },
  {
    id: "meme-work-smell",
    keywords: ["班味", "上班味", "打工味"],
    min: 1,
    reply: "班味常用来形容长期上班后表现出的疲惫、克制和职业化状态。",
  },
  {
    id: "meme-relax",
    keywords: ["松弛感", "松弛", "不紧绷"],
    min: 1,
    reply: "松弛感表示一种不焦虑、不用力过猛、自然从容的状态。",
  },
  {
    id: "meme-kid",
    keywords: ["小孩哥", "小孩姐", "小孩哥小孩姐"],
    min: 1,
    reply: "小孩哥/小孩姐用来称呼年纪小但能力强、气场足或表现成熟的人。",
  },
  {
    id: "meme-eye-catching",
    keywords: ["显眼包", "显眼", "整活"],
    min: 1,
    reply: "显眼包指特别出挑、存在感强、容易被注意到的人或行为。",
  },
  {
    id: "meme-partner",
    keywords: ["搭子", "饭搭子", "旅游搭子", "健身搭子"],
    min: 1,
    reply: "搭子指因为某个具体活动临时或长期结伴的人，比如饭搭子、旅游搭子。",
  },
  {
    id: "meme-emotional-value",
    keywords: ["情绪价值", "提供情绪", "情绪支持"],
    min: 1,
    reply: "情绪价值指让人感到被理解、被支持、被安慰或更开心的沟通体验。",
  },
  {
    id: "meme-love-yourself",
    keywords: ["爱你老己", "爱自己", "老己"],
    min: 1,
    reply: "爱你老己是“爱你自己”的谐音表达，常用于鼓励自我关照和自我接纳。",
  },
  {
    id: "meme-break-cauldron",
    keywords: ["助我破鼎", "破鼎", "哪吒"],
    min: 1,
    reply: "助我破鼎常被用作自我打气，表达突破限制、冲出困境的意思。",
  },
  {
    id: "meme-really",
    keywords: ["尊嘟假嘟", "尊嘟", "假嘟"],
    min: 1,
    reply: "尊嘟假嘟是“真的假的”的可爱化表达，常用于调侃式确认。",
  },
  {
    id: "meme-cool",
    keywords: ["泰裤辣", "太酷啦", "太酷了"],
    min: 1,
    reply: "泰裤辣是“太酷啦”的谐音梗，用来表达夸张的惊喜或赞叹。",
  },
  {
    id: "meme-leading",
    keywords: ["遥遥领先", "领先太多", "领先"],
    min: 1,
    reply: "遥遥领先常用于夸张表达优势明显，也常带有调侃语气。",
  },
  {
    id: "meme-e-snack",
    keywords: ["电子榨菜", "榨菜", "下饭视频"],
    min: 1,
    reply: "电子榨菜指吃饭时随手播放、轻松下饭的视频或内容。",
  },
  {
    id: "meme-bao",
    keywords: ["包的", "包可以", "包稳"],
    min: 1,
    reply: "包的表示“肯定可以、稳了、交给我”，语气比较轻松自信。",
  },
  {
    id: "meme-so-what",
    keywords: ["那咋了", "那怎么了", "咋了"],
    min: 1,
    reply: "那咋了常用于轻松回怼或表示不在意，语气取决于上下文。",
  },
  {
    id: "meme-knife-shield",
    keywords: ["我的刀盾", "刀盾", "what the dog doing"],
    min: 1,
    reply: "我的刀盾是空耳类热梗，常用于抽象、魔性或无厘头语境。",
  },
  {
    id: "meme-nailong",
    keywords: ["奶龙大笑", "奶龙", "大笑"],
    min: 1,
    reply: "奶龙大笑常用于表情包和鬼畜语境，表达夸张、魔性或抽象的笑点。",
  },
  {
    id: "meme-chinamaxxing",
    keywords: ["Chinamaxxing", "chinamaxxing", "很中国", "明天就会变成中国人"],
    min: 1,
    reply: "ChinaMaxxing常指海外网友模仿或调侃中国生活方式的跨文化网络迷因。",
  },
  {
    id: "meme-cyber-check",
    keywords: ["赛博对账", "对账", "赛博"],
    min: 1,
    reply: "赛博对账常用于调侃网友通过公开信息、平台记录或碎片线索互相核对事实。",
  },
  {
    id: "meme-alive",
    keywords: ["活人感", "活人", "真实感"],
    min: 1,
    reply: "活人感常用来形容内容或人设不僵硬、有真实生活气息。",
  },
  {
    id: "meme-digital-nomad",
    keywords: ["数字游民", "远程办公", "到处办公"],
    min: 1,
    reply: "数字游民指依靠互联网远程工作、不固定在单一城市生活的人群。",
  },
  {
    id: "meme-general",
    keywords: ["热梗", "网络梗", "流行语", "玩梗"],
    min: 1,
    reply: "当前内置热梗包括：city不city、泼天的富贵、班味、松弛感、显眼包、搭子、情绪价值、爱你老己、助我破鼎、尊嘟假嘟、泰裤辣、遥遥领先、电子榨菜、包的、那咋了、我的刀盾、奶龙大笑、ChinaMaxxing。",
  },
  {
    id: "meme-yyds",
    keywords: ["yyds", "永远的神", "太强了", "封神", "神中神"],
    min: 1,
    reply: "yyds表示“永远的神”，常用于表达强烈认可或夸赞。",
  },
  {
    id: "meme-juejuezi",
    keywords: ["绝绝子", "绝了", "太绝", "好绝", "绝绝"],
    min: 1,
    reply: "绝绝子通常表示非常好、很厉害，也可能带有夸张调侃语气。",
  },
  {
    id: "meme-emo",
    keywords: ["emo", "破防", "蚌埠住了", "绷不住", "难绷"],
    min: 1,
    reply: "这类词常用于表达情绪波动、被触动、想笑又忍不住或心态被影响。",
  },
  {
    id: "meme-baodian",
    keywords: ["典", "太典了", "经典", "老典", "典中典"],
    min: 1,
    reply: "“典”常用于吐槽某件事很有代表性、很熟悉或很套路。",
  },
  {
    id: "meme-liuhan",
    keywords: ["流汗黄豆", "汗流浃背", "汗流浃背了", "压力来了", "汗流浃背吧"],
    min: 1,
    reply: "这个热梗常用于表达尴尬、压力、无语或被反向拿捏的状态。",
  },
  {
    id: "meme-xianggu",
    keywords: ["香菇蓝瘦", "蓝瘦", "香菇", "难受想哭"],
    min: 1,
    reply: "香菇蓝瘦是“想哭难受”的谐音梗，用来表达委屈或难过。",
  },
  {
    id: "meme-zhenxiang",
    keywords: ["真香", "大型真香", "打脸", "嘴硬", "反转"],
    min: 1,
    reply: "真香常用于形容一开始拒绝，后来又接受甚至喜欢的反转场景。",
  },
  {
    id: "meme-naonao",
    keywords: ["闹麻了", "别闹", "整不会了", "不会真有人", "啊这"],
    min: 1,
    reply: "这类表达多用于调侃、无语或对离谱情况的轻度吐槽。",
  },
  {
    id: "meme-ganfan",
    keywords: ["干饭", "干饭人", "开饭", "饭点", "吃饭不积极"],
    min: 1,
    reply: "干饭人常用于调侃认真吃饭、积极吃饭或到了饭点的状态。",
  },
  {
    id: "meme-duanzi",
    keywords: ["梗", "热梗", "网络梗", "段子", "抽象"],
    min: 1,
    reply: "你可以输入具体热梗，我会按内置规则解释它的大致含义和使用场景。",
  },
  {
    id: "default",
    keywords: [],
    min: 0,
    reply: "您的当前 API KEY 权限不足，请联系管理员提升权限",
  },
];

export default {
  async fetch(request, env) {
    const started = Date.now();
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return withCors(new Response(null, { status: 204 }), request, env);
    }

    try {
      let response;
      if (url.pathname === "/" || url.pathname === "/health") {
        response = json({
          ok: true,
          name: "0penAI API",
          model: DEFAULT_MODEL,
          dailyPhraseCount: dailyPhraseBank.length,
          dailyWordCount: dailyWordBank.length,
          publicEndpoint: chatEndpoint(env.PUBLIC_API_BASE || ""),
        });
      } else if (url.pathname === "/v1/client-key" && request.method === "GET") {
        response = handleClientKey(request, env);
      } else if (url.pathname === "/v1/models" && request.method === "GET") {
        response = handleModels(env);
      } else if (url.pathname === "/v1/chat/completions" && request.method === "POST") {
        response = await handleChatCompletions(request, env);
      } else if (url.pathname === "/v1/completions" && request.method === "POST") {
        response = await handleCompletions(request, env);
      } else if (url.pathname === "/admin/stats" && request.method === "GET") {
        response = handleAdminStats(request, env);
      } else if (url.pathname === "/admin/reset" && request.method === "POST") {
        response = handleAdminReset(request, env);
      } else {
        response = json({ error: { message: "Not found", type: "invalid_request_error" } }, 404);
      }

      recordRequest(url.pathname, response.status, Date.now() - started, response.headers.get("x-demo-intent"));
      return withCors(response, request, env);
    } catch (error) {
      const response = json({
        error: {
          message: error instanceof Error ? error.message : "Internal error",
          type: "server_error",
        },
      }, 500);
      recordRequest(url.pathname, 500, Date.now() - started, "error");
      return withCors(response, request, env);
    }
  },
};

function handleClientKey(request, env) {
  if (!isTrustedFrontend(request, env)) {
    stats.deniedKeyRequests += 1;
    return json({ error: "client key can only be issued to the configured frontend origin" }, 403);
  }

  stats.keyIssued += 1;
  return json({
    apiKey: randomApiKey(),
    prefix: "sk-",
    note: "This is a demo key for the 0penAI API.",
    endpoint: chatEndpoint(env.PUBLIC_API_BASE || ""),
  });
}

function handleModels(env) {
  const modelName = env.MODEL_NAME || DEFAULT_MODEL;
  const vendor = env.MODEL_VENDOR || "0penAI";
  return json({
    object: "list",
    data: [modelName, `${modelName}-lite`, `${modelName}-chat`, `${modelName}-code`].map((id) => ({
      id,
      object: "model",
      created: 1772366400,
      owned_by: vendor,
    })),
  });
}

async function handleChatCompletions(request, env) {
  const body = await safeJson(request);
  const messages = Array.isArray(body.messages) ? body.messages : [];
  const prompt = getLastUserMessage(messages) || String(body.prompt || "");
  const model = body.model || env.MODEL_NAME || DEFAULT_MODEL;
  const generated = generateReply(prompt);
  const now = Math.floor(Date.now() / 1000);
  stats.chatRequests += 1;
  stats.byModel[model] = (stats.byModel[model] || 0) + 1;

  const payload = {
    id: `chatcmpl-${randomId(24)}`,
    object: "chat.completion",
    created: now,
    model,
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: generated.text,
        },
        finish_reason: "stop",
      },
    ],
    usage: tokenUsage(prompt, generated.text),
  };

  return json(payload, 200, { "x-demo-intent": generated.intent });
}

async function handleCompletions(request, env) {
  const body = await safeJson(request);
  const prompt = Array.isArray(body.prompt) ? body.prompt.join("\n") : String(body.prompt || "");
  const model = body.model || env.MODEL_NAME || DEFAULT_MODEL;
  const generated = generateReply(prompt);
  const now = Math.floor(Date.now() / 1000);
  stats.completionRequests += 1;
  stats.byModel[model] = (stats.byModel[model] || 0) + 1;

  return json({
    id: `cmpl-${randomId(24)}`,
    object: "text_completion",
    created: now,
    model,
    choices: [
      {
        text: generated.text,
        index: 0,
        logprobs: null,
        finish_reason: "stop",
      },
    ],
    usage: tokenUsage(prompt, generated.text),
  }, 200, { "x-demo-intent": generated.intent });
}

function handleAdminStats(request, env) {
  if (!isAdmin(request, env)) {
    return json({ error: "unauthorized" }, 401);
  }

  const days = lastDays(7).map((day) => ({
    day,
    requests: stats.byDay[day] || 0,
  }));

  return json({
    ok: true,
    totalRequests: stats.totalRequests,
    chatRequests: stats.chatRequests,
    completionRequests: stats.completionRequests,
    keyIssued: stats.keyIssued,
    deniedKeyRequests: stats.deniedKeyRequests,
    averageLatencyMs: stats.totalRequests ? Math.round(stats.totalLatency / stats.totalRequests) : 0,
    byDay: days,
    byModel: toSeries(stats.byModel),
    byRoute: toSeries(stats.byRoute),
    byIntent: toSeries(stats.byIntent),
    recent: stats.recent.slice(0, 20),
  });
}

function handleAdminReset(request, env) {
  if (!isAdmin(request, env)) {
    return json({ error: "unauthorized" }, 401);
  }

  stats.totalRequests = 0;
  stats.chatRequests = 0;
  stats.completionRequests = 0;
  stats.keyIssued = 0;
  stats.deniedKeyRequests = 0;
  stats.totalLatency = 0;
  stats.recent = [];
  stats.byDay = {};
  stats.byModel = {};
  stats.byRoute = {};
  stats.byIntent = {};
  return json({ ok: true });
}

function chatEndpoint(base) {
  return base ? `${base.replace(/\/+$/, "")}/v1/chat/completions` : "";
}

function buildDailyPhraseBank() {
  const phrases = [...dailyPhraseSeeds];
  for (const subject of dailyPhraseParts.subjects) {
    for (const mood of dailyPhraseParts.moods) {
      for (const verb of dailyPhraseParts.verbs) {
        for (const object of dailyPhraseParts.objects) {
          phrases.push(`${subject}${mood}${verb}${object}`);
          if (phrases.length >= 560) return uniqueList(phrases);
        }
      }
    }
  }
  return uniqueList(phrases);
}

function buildDailyWordBank() {
  const words = [...dailyWordBase];
  for (const prefix of dailyWordPieces.prefixes) {
    for (const suffix of dailyWordPieces.suffixes) {
      words.push(`${prefix}${suffix}`);
    }
  }
  return uniqueList(words);
}

function uniqueList(items) {
  return Array.from(new Set(items.map((item) => String(item).trim()).filter(Boolean)));
}

function matchDailyBank(prompt) {
  const text = String(prompt || "").trim();
  const lower = text.toLowerCase();
  const phrase = dailyPhraseBank.find((item) => lower.includes(item.toLowerCase()));
  if (phrase) {
    return {
      intent: "daily-phrase-bank",
      text: `已识别日常语句：“${phrase}”。你可以继续补充上下文。`,
    };
  }

  const word = dailyWordBank.find((item) => {
    const normalized = item.toLowerCase();
    return normalized.length >= 2 && lower.includes(normalized);
  });

  if (word) {
    return {
      intent: "daily-word-bank",
      text: `已识别日常单词：“${word}”。你可以继续围绕它提问。`,
    };
  }

  return null;
}

function generateReply(prompt) {
  const text = String(prompt || "").trim();
  if (!text) {
    return { intent: "empty", text: "请输入提示词后再发送。" };
  }

  if (text.includes("翻译") || /\btranslate\b/i.test(text)) {
    return { intent: "translate", text: translateByDictionary(text) };
  }

  let best = null;
  for (const rule of keywordRules) {
    const hits = rule.keywords.filter((keyword) => text.includes(keyword)).length;
    if (hits >= rule.min && (!best || hits > best.hits)) {
      best = { rule, hits };
    }
  }

  const selected = best?.rule || keywordRules[keywordRules.length - 1];
  if (selected.id === "default") {
    const dailyMatch = matchDailyBank(text);
    if (dailyMatch) return dailyMatch;
  }

  const reply = typeof selected.reply === "function" ? selected.reply(text) : selected.reply;
  return { intent: selected.id, text: reply };
}

function translateByDictionary(prompt) {
  const cleaned = prompt
    .replace(/翻译/g, " ")
    .replace(/\btranslate\b/gi, " ")
    .replace(/[：:，,。.!?？；;\n\r\t]+/g, " ")
    .trim();

  if (!cleaned) {
    return "请在“翻译”后输入需要转换的词，例如：翻译 bot man。";
  }

  const parts = cleaned.split(/\s+/).filter(Boolean);
  const translated = parts.map((part) => {
    const lower = part.toLowerCase();
    if (translationDictionary[lower]) return translationDictionary[lower];
    if (translationDictionary[part]) return translationDictionary[part];
    return `[${part}]`;
  });

  return translated.join(" ");
}

function getLastUserMessage(messages) {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    if (messages[index]?.role === "user") {
      const content = messages[index].content;
      if (typeof content === "string") return content;
      if (Array.isArray(content)) {
        return content
          .map((item) => (typeof item === "string" ? item : item?.text || ""))
          .join(" ")
          .trim();
      }
    }
  }
  return "";
}

async function safeJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function tokenUsage(prompt, completion) {
  const promptTokens = roughTokens(prompt);
  const completionTokens = roughTokens(completion);
  return {
    prompt_tokens: promptTokens,
    completion_tokens: completionTokens,
    total_tokens: promptTokens + completionTokens,
  };
}

function roughTokens(value) {
  return Math.max(1, Math.ceil(String(value || "").length / 3));
}

function randomApiKey() {
  return `sk-${randomId(48)}`;
}

function randomId(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

function isTrustedFrontend(request, env) {
  const allowed = String(env.ALLOWED_FRONTEND_ORIGINS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const origin = request.headers.get("Origin") || "";
  const referer = request.headers.get("Referer") || "";
  return allowed.some((allowedOrigin) => origin === allowedOrigin || referer.startsWith(`${allowedOrigin}/`));
}

function isAdmin(request, env) {
  const url = new URL(request.url);
  const token = request.headers.get("x-admin-token") || url.searchParams.get("token");
  return token === String(env.ADMIN_TOKEN || "admin");
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

function withCors(response, request, env) {
  const headers = new Headers(response.headers);
  const origin = request.headers.get("Origin") || "*";
  headers.set("access-control-allow-origin", origin === "null" ? "*" : origin);
  headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  headers.set("access-control-allow-headers", "authorization,content-type,x-admin-token");
  headers.set("access-control-max-age", "86400");
  headers.set("vary", "Origin");
  headers.set("x-public-api-base", env.PUBLIC_API_BASE || "");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function recordRequest(route, status, latency, intent = "unknown") {
  const day = new Date().toISOString().slice(0, 10);
  stats.totalRequests += 1;
  stats.totalLatency += latency;
  stats.byDay[day] = (stats.byDay[day] || 0) + 1;
  stats.byRoute[route] = (stats.byRoute[route] || 0) + 1;
  stats.byIntent[intent || "unknown"] = (stats.byIntent[intent || "unknown"] || 0) + 1;
  stats.recent.unshift({
    at: new Date().toISOString(),
    route,
    status,
    latency,
    intent: intent || "unknown",
  });
  stats.recent = stats.recent.slice(0, 50);
}

function lastDays(count) {
  const days = [];
  for (let offset = count - 1; offset >= 0; offset -= 1) {
    const date = new Date(Date.now() - offset * 24 * 60 * 60 * 1000);
    days.push(date.toISOString().slice(0, 10));
  }
  return days;
}

function toSeries(object) {
  return Object.entries(object)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}
