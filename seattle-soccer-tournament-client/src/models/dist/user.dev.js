"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var userurl = "http://localhost:5000/api/v1";

var UserModel =
/*#__PURE__*/
function () {
  function UserModel() {
    _classCallCheck(this, UserModel);
  }

  _createClass(UserModel, null, [{
    key: "create",
    value: function create(data) {
      var res;
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(userurl, "/auth/register"), {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(res.json());

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "login",
    value: function login(data) {
      var res;
      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(data);
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch("".concat(userurl, "/auth/login"), {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
              }));

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              return _context2.abrupt("return", _context2.sent);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      var res;
      return regeneratorRuntime.async(function logout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(userurl, "/auth/logout"), {
                method: 'DELETE',
                credentials: 'include'
              }));

            case 2:
              res = _context3.sent;
              _context3.next = 5;
              return regeneratorRuntime.awrap(res.json());

            case 5:
              return _context3.abrupt("return", _context3.sent);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return UserModel;
}();

exports["default"] = UserModel;