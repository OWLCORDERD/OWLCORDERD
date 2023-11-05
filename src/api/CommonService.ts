import service from './index';

const getDB = {
  getAdvantage: () =>
    service({
      url: '/advantage',
    }).then(res => res.data),
  getTechnology: () =>
    service({
      url: '/Technology',
    }).then(res => res.data),
  getWorkSiteList: () =>
    service({
      url: '/WorkSiteList',
    }).then(res => res.data),
};

export default getDB;
