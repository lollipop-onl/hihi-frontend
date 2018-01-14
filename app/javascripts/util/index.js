import async from 'async';
import Maps from './maps';
import request from '../request';
import C from '../constants';

class Util {
  /**
   * スケジュールのCSVをJSONにパースする
   */
  parseScheduleCsv (csv) {
    return new Promise((resolve, reject) => {
      request.fetchSchoolList()
        .then((schoolList) => {
          console.log(schoolList);

          csv.split('\n').map((item, i) => {
            // ヘッダーの行は処理しない
            if (i === 0) {
              return;
            }

            const result = {};
            // データを切り出す
            const plain = item.split(',');

            // 行の要素が０なら処理しない
            if (plain.length === 0) {
              return;
            }

            // 地区のIDを取得
            const district = schoolList.find((school) => {
              return school.name === plain[0];
            });

            console.log(plain[0], district);

            return result;
          });
        });
    });
  }
}

export default new Util();
