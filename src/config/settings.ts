/**
 * dev : 로컬 컴퓨터 개발
 * else : azure app service
 */
const ENV_MODE = 'dev';

var typeOrmDb1 = {
  type: '',
  host: '',
  port: 3306,
  username: '',
  password: '',
  database: '',
  synchronize: false,
  logging: false,
};
const cryptoKey = 'cryptoKeySample@#@$%#%$#@!!';
const jwtKey = 'jwtKeySample@#@$%#%$#@!!';
let mongoDBConnString = '';
let react_project1_path = '';

if (ENV_MODE === 'dev') {
  typeOrmDb1.type = 'mysql';
  typeOrmDb1.host = '221.156.48.39';
  typeOrmDb1.port = 3306;
  typeOrmDb1.username = 'najongjine';
  typeOrmDb1.password = 'jongjin2';
  typeOrmDb1.database = 'test';
  typeOrmDb1.synchronize = false;
  typeOrmDb1.logging = false;

  mongoDBConnString = `mongodb+srv://najongjine:jongjin2@nest.jte3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  react_project1_path = `H:/MyProjects/Express/NodeExpress_Ts_React_V2/react_project1`;
} else {
  typeOrmDb1.type = 'mysql';
  typeOrmDb1.host = '221.156.48.39';
  typeOrmDb1.port = 3306;
  typeOrmDb1.username = 'najongjine';
  typeOrmDb1.password = 'jongjin2';
  typeOrmDb1.database = 'test';
  typeOrmDb1.synchronize = false;
  typeOrmDb1.logging = false;

  mongoDBConnString = `mongodb+srv://najongjine:jongjin2@nest.jte3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  react_project1_path = `H:/MyProjects/Express/NodeExpress_Ts_React_V2/react_project1`;
}

exports.configSettings = {
  typeOrmDb1,
  ENV_MODE,
  cryptoKey,
  jwtKey,
  mongoDBConnString,
  react_project1_path,
};
