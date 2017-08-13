import fetch from 'node-fetch';
import DataLoader from 'dataloader';

// fetch data
const getJson = url => fetch(url).then(res => res.json());

// Use loader to avoid retriving same endpoint twice
const loader = new DataLoader(urls => Promise.all(urls.map(getJson)));

// recursive pagination
const paginate = (url, data = []) =>
  loader.load(url).then((json) => {
    const results = [...data, ...json.results];
    if (json.next) {
      return paginate(json.next, results);
    }
    return results;
  });

// Connector
const RESTConnector = {
  loadOne(url) {
    return loader.load(url);
  },
  loadPaginate(url, search) {
    if (search) {
      return paginate(`${url}?search=${search}`);
    }
    return paginate(url);
  },
  loadMany(urls) {
    return loader.loadMany(urls);
  },
};

export default RESTConnector;
