const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://supratech:visukrta@supratech-cluster-diazb.mongodb.net/test',
  port: process.env.PORT || 8000,
};

export default config;
