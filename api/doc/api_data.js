define({ "api": [
  {
    "type": "get",
    "url": "/admin/goods/addGoods",
    "title": "商品添加",
    "name": "addGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsType",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nowPrice",
            "description": "<p>商品现价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale",
            "description": "<p>商品商量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guige",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addRess",
            "description": "<p>原产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>销售状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgPath",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "second",
            "description": "<p>二级分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/delGoods",
    "title": "商品删除",
    "name": "delGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/getGoods",
    "title": "商品查询",
    "name": "getGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsType",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nowPrice",
            "description": "<p>商品现价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale",
            "description": "<p>商品商量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guige",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addRess",
            "description": "<p>原产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>销售状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgPath",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "second",
            "description": "<p>二级分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/getGoodsByKw",
    "title": "关健字查询",
    "name": "getGoodsByKw",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsType",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nowPrice",
            "description": "<p>商品现价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale",
            "description": "<p>商品商量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guige",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addRess",
            "description": "<p>原产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>销售状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgPath",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "second",
            "description": "<p>二级分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/getGoodsByPage",
    "title": "分页+分类",
    "name": "getGoodsByPage",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsType",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nowPrice",
            "description": "<p>商品现价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale",
            "description": "<p>商品商量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guige",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addRess",
            "description": "<p>原产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>销售状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgPath",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "second",
            "description": "<p>二级分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/goods/updateGoods",
    "title": "商品修改",
    "name": "updateGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>商品id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodsType",
            "description": "<p>商品分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nowPrice",
            "description": "<p>商品现价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "oldPrice",
            "description": "<p>商品原价</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "counts",
            "description": "<p>商品库存</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sale",
            "description": "<p>商品商量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guige",
            "description": "<p>商品规格</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addRess",
            "description": "<p>原产地</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>销售状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgPath",
            "description": "<p>照片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "second",
            "description": "<p>二级分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminGoodsRouter.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/admin/user/login",
    "title": "用户登录",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminUserRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/admin/user/reg",
    "title": "用户注册",
    "name": "reg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "err",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>msg</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "router/adminUserRouter.js",
    "groupTitle": "User"
  }
] });
