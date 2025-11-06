import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data.json");

export function getData() {
  if (!fs.existsSync(filePath)) return [];
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export function saveData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
