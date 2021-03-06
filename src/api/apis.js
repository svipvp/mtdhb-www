// 对应 component/Domain 选择的线路
const list = ['https://mtdhb.z.xxooweb.com/', 'https://api.mtdhb.com/'];

const domain = list[localStorage.getItem('domain') || 0];

const apis = {
  getCaptcha: 'user/registerCaptcha',
  getRegisterCode: 'user/registerMail',
  register: 'user/register',
  login: 'user/login',
  getUser: 'user',
  cookie: 'user/cookie',
  deleteCookie: 'user/cookie',
  getAvailableCount: 'user/number',
  getHongbao: 'user/receiving',
  getHongbaoHistory: 'user/receiving',
  refresh: 'user/receiving',
  zhuangbi: 'zhuangbi',
  resetPassword: 'user/resetPassword',
  resetPasswordCaptcha: 'user/resetPasswordCaptcha',
  resetPasswordMail: 'user/resetPasswordMail',
  getRank: 'rank',
  getPie: 'pie',
  getTrend: 'trend',
  getNotice: 'notice.json' // 为了方便随时更新公告，直接在 JSON 中维护
};

export default Object.keys(apis).reduce((obj, key) => {
  obj[key] = domain + apis[key];
  return obj;
}, {});
