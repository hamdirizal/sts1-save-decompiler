import fs from "fs";

export const isDirectory = (path: string): boolean => {
  try {
    return fs.statSync(path).isDirectory();
  } catch {
    return false;
  }
};

export const isFileExists = (path: string): boolean => {
  return fs.existsSync(path);
};

export const backupAndOverwriteSafeFile = (path: string): void => {};
