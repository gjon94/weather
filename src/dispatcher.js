class Dispatcher {
  constructor(apiKey, objConfig = {}) {
    if (typeof apiKey === "string") {
      if (
        !(
          typeof objConfig === "object" &&
          objConfig !== null &&
          !Array.isArray(objConfig)
        )
      ) {
        console.error("second parameter must me a object,configuration failed");
        objConfig = {};
      }
      this.config({ apiKey: apiKey, ...objConfig });
    } else if (
      typeof apiKey === "object" &&
      apiKey !== null &&
      !Array.isArray(apiKey)
    ) {
      this.config(apiKey);
    } else {
      throw new Error("missed apikey parameter");
    }
  }
  /**
   * Variables
   */
  defaultUrl = "";
  params = "";

  /**
   * Methods
   */
  setKey(key) {
    if (!key) {
      throw new Error("missed paramete for setting apikey");
    }

    this.config({ apiKey: key });
  }

  /**
   *
   * @returns object
   */
  async search(obj) {
    this.searchConfig({ ...this.defaultConfig, ...obj });

    let finalUrl = (this.defaultUrl += this.params);

    const res = await fetch(finalUrl);
    const finalResult = {};
    finalResult.result = res.ok;
    finalResult.data = await res.json();
    this.params = "";

    return finalResult;
  }
  defaultConfig = {};

  config(obj) {
    for (const keyValue of Object.entries(obj)) {
      this.defaultConfig[keyValue[0]] = keyValue[1];
    }
  }
  searchConfig(obj) {
    for (const keyValue of Object.entries(obj)) {
      this.attachUrlParams(keyValue);
    }
    // console.log(this.rules());
  }

  attachUrlParams(keyValue) {
    const [key, val] = keyValue;
    let haveThisRule = false;
    console.log(this.#getRules());
    this.#getRules().forEach((element) => {
      if (element[0] === key) {
        this.params += element[1] + val;
        haveThisRule = true;
      }
    });
    if (!haveThisRule) {
      console.error(key + "  not exist");
    }
  }

  #defaultRules = [
    ["apiKey", "appid"],
    ["city", "q"],
    ["language", "lang"],
    ["mode", "mode"],
    ["units", "units"],
  ];

  rules = [];

  ///creare funzione per filtrare le nuove rules
  #getRules() {
    return [
      ...this.filterRules(this.#defaultRules),
      ...this.filterRules(this.rules),
    ];
  }

  filterRules(arr) {
    // const copyArr = JSON.parse(JSON.stringify(arr));
    const copyArr = this.arrayCopyFn(arr);
    copyArr.forEach((el) => {
      el[1].trim();
      el[1] = `&${el[1]}=`;
    });

    return copyArr;
  }

  arrayCopyFn(arr) {
    const clone = [];
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        clone.push(this.arrayCopyFn(element));
      } else {
        clone.push(element);
      }
    });

    return clone;
  }
  optionsList() {
    const arr = [...this.#defaultRules, ...this.rules];
    const newArr = arr.map((el) => el[0]);
    return newArr;
  }
}

export default Dispatcher;
