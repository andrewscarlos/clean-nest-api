import * as mongoose from 'mongoose';

export const generateOrderId = () => {
    return new mongoose.mongo.ObjectId().toHexString();
  };