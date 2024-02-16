/* eslint-disable */
import Queue from 'bull';

const fileQueue = new Queue('fileQueue');

fileQueue.process(async (job) => {
  const { userId, fileId } = job.data;

  if (!userId) {
    throw new Error('Missing userId');
  }

  if (!fileId) {
    throw new Error('Missing fileId');
  }

  const file = await dbClient.files.findOne({ _id: fileId, userId });

  if (!file) {
    throw new Error('File not found');
  }

  // Generate thumbnails and store them
  // Your code to generate thumbnails
});
