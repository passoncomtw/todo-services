# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2023-11-24)


### ⚠ BREAKING CHANGES

* Database Schema 需要 migration
* Database Schema 需要 migration

### Features

* 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 新增 taskRouter 和 taskServices ([1bf65f7](https://github.com/passoncomtw/todo-demo-api/commit/1bf65f71956671a04fc49a99de9ca3764739afb5))
* 🎸 [#26](https://github.com/passoncomtw/todo-demo-api/issues/26) 刪除  任務 API 完成 ([e624168](https://github.com/passoncomtw/todo-demo-api/commit/e624168dbb6ff07d498ec1d7532284d3bfd909e0))
* 🎸 [#26](https://github.com/passoncomtw/todo-demo-api/issues/26) 刪除  任務 API 完成 ([fa33851](https://github.com/passoncomtw/todo-demo-api/commit/fa338510601f4eb79cdcc16919fbb21fdf52ed90))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 完成 ([3b9b270](https://github.com/passoncomtw/todo-demo-api/commit/3b9b27033a4396ab0797dce3abe50bea807d1066))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 完成 ([11d1a13](https://github.com/passoncomtw/todo-demo-api/commit/11d1a13a4bab57d45cab45f459b561d31c46a977))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 增加修改 isDeleted 的參數設定 ([85bff5e](https://github.com/passoncomtw/todo-demo-api/commit/85bff5ebb77526b83e23c33c24fd9761604bc326))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 增加修改 isDeleted 的參數設定 ([f449b85](https://github.com/passoncomtw/todo-demo-api/commit/f449b85333e1537a44cce3e93b48b0dfe2b49738))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(尚未包含參數) ([aaa117e](https://github.com/passoncomtw/todo-demo-api/commit/aaa117eb86d0d8037e67b687684e59710892241b))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(尚未包含參數) ([4a3d027](https://github.com/passoncomtw/todo-demo-api/commit/4a3d027144e1e009d12202c622a74d48f82ebf3e))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(增加 userId, isCompleted, deadlineAt 的參數) ([b1e89c2](https://github.com/passoncomtw/todo-demo-api/commit/b1e89c232bfa9cf08267c509adcce49f670bc6ba))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(增加 userId, isCompleted, deadlineAt 的參數) ([61a4de0](https://github.com/passoncomtw/todo-demo-api/commit/61a4de01cc19efb26cacee656e99626e03c5844a))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) 任務的資料庫 Schema 設計 ([05e8e7c](https://github.com/passoncomtw/todo-demo-api/commit/05e8e7cc5b9a8c0bbe1decded3a8f7fe8a56dbf4))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) 修正因為修改 migrations/users.js 造成初始化 seeder 會產生錯誤 ([10c70c9](https://github.com/passoncomtw/todo-demo-api/commit/10c70c9896076df80005ffc544370e3fe7851570))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) Modal/_User.js => Modal/User.js ([97b8376](https://github.com/passoncomtw/todo-demo-api/commit/97b83760c3f101f9befea252586ba160f7498ae1))
* 🎸 [#33](https://github.com/passoncomtw/todo-demo-api/issues/33) 調整 user欄位 修復登入功能 ([992c8b2](https://github.com/passoncomtw/todo-demo-api/commit/992c8b249106f6eeda8e22d8f5f1cae4bbe52603))
* 🎸 調整註冊使用者的Schema ([e55a5ba](https://github.com/passoncomtw/todo-demo-api/commit/e55a5bab13eddc1dcc0392dd751b71966417b909))
* 🎸 initail project ([7623bfe](https://github.com/passoncomtw/todo-demo-api/commit/7623bfe00ffed82e53aece6ea89d2defc2ee68ed))
* 🎸[#53](https://github.com/passoncomtw/todo-demo-api/issues/53) 增加一個取回version 的 API ([6a30891](https://github.com/passoncomtw/todo-demo-api/commit/6a30891b1880da717803f8ed84a755b92460b6ad))
* **database:** 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 任務增加 使用者 ID 的 ref ([bd07338](https://github.com/passoncomtw/todo-demo-api/commit/bd073389c886c7bc2c51e4f1c204d4b480b87e9b))
* **database:** 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 任務增加 使用者 ID 的 ref ([d78baa1](https://github.com/passoncomtw/todo-demo-api/commit/d78baa1af623ac00ef72328d95d18ef64950897c))


### Bug Fixes

* 🐛 [#1](https://github.com/passoncomtw/todo-demo-api/issues/1) test fix ([3d78adb](https://github.com/passoncomtw/todo-demo-api/commit/3d78adb0a882f28f193ab7937924334a6c09a1c2))


* feat🎸(database): #4  調整 migration 設定與 Task model ([fdb4b0c](https://github.com/passoncomtw/todo-demo-api/commit/fdb4b0c15d45e7322ed718f31cb40c4faf66e19b)), closes [#4](https://github.com/passoncomtw/todo-demo-api/issues/4)
* feat🎸(database): #4  調整 migration 設定與 Task model ([c07722d](https://github.com/passoncomtw/todo-demo-api/commit/c07722ddaa4073b6f703112d5a14779fa8cbc726)), closes [#4](https://github.com/passoncomtw/todo-demo-api/issues/4)

### [1.0.1](https://github.com/passoncomtw/todo-demo-api/compare/v1.0.0...v1.0.1) (2023-11-21)


### Bug Fixes

* 🐛 [#1](https://github.com/passoncomtw/todo-demo-api/issues/1) test fix ([3d78adb](https://github.com/passoncomtw/todo-demo-api/commit/3d78adb0a882f28f193ab7937924334a6c09a1c2))

## 1.0.0 (2023-11-21)


### ⚠ BREAKING CHANGES

* Database Schema 需要 migration
* Database Schema 需要 migration

### Features

* 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 新增 taskRouter 和 taskServices ([1bf65f7](https://github.com/passoncomtw/todo-demo-api/commit/1bf65f71956671a04fc49a99de9ca3764739afb5))
* 🎸 [#26](https://github.com/passoncomtw/todo-demo-api/issues/26) 刪除  任務 API 完成 ([e624168](https://github.com/passoncomtw/todo-demo-api/commit/e624168dbb6ff07d498ec1d7532284d3bfd909e0))
* 🎸 [#26](https://github.com/passoncomtw/todo-demo-api/issues/26) 刪除  任務 API 完成 ([fa33851](https://github.com/passoncomtw/todo-demo-api/commit/fa338510601f4eb79cdcc16919fbb21fdf52ed90))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 完成 ([3b9b270](https://github.com/passoncomtw/todo-demo-api/commit/3b9b27033a4396ab0797dce3abe50bea807d1066))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 完成 ([11d1a13](https://github.com/passoncomtw/todo-demo-api/commit/11d1a13a4bab57d45cab45f459b561d31c46a977))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 增加修改 isDeleted 的參數設定 ([85bff5e](https://github.com/passoncomtw/todo-demo-api/commit/85bff5ebb77526b83e23c33c24fd9761604bc326))
* 🎸 [#27](https://github.com/passoncomtw/todo-demo-api/issues/27) 編輯  任務 API 增加修改 isDeleted 的參數設定 ([f449b85](https://github.com/passoncomtw/todo-demo-api/commit/f449b85333e1537a44cce3e93b48b0dfe2b49738))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(尚未包含參數) ([aaa117e](https://github.com/passoncomtw/todo-demo-api/commit/aaa117eb86d0d8037e67b687684e59710892241b))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(尚未包含參數) ([4a3d027](https://github.com/passoncomtw/todo-demo-api/commit/4a3d027144e1e009d12202c622a74d48f82ebf3e))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(增加 userId, isCompleted, deadlineAt 的參數) ([b1e89c2](https://github.com/passoncomtw/todo-demo-api/commit/b1e89c232bfa9cf08267c509adcce49f670bc6ba))
* 🎸 [#28](https://github.com/passoncomtw/todo-demo-api/issues/28) 取回任務列表(增加 userId, isCompleted, deadlineAt 的參數) ([61a4de0](https://github.com/passoncomtw/todo-demo-api/commit/61a4de01cc19efb26cacee656e99626e03c5844a))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) 任務的資料庫 Schema 設計 ([05e8e7c](https://github.com/passoncomtw/todo-demo-api/commit/05e8e7cc5b9a8c0bbe1decded3a8f7fe8a56dbf4))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) 修正因為修改 migrations/users.js 造成初始化 seeder 會產生錯誤 ([10c70c9](https://github.com/passoncomtw/todo-demo-api/commit/10c70c9896076df80005ffc544370e3fe7851570))
* 🎸 [#30](https://github.com/passoncomtw/todo-demo-api/issues/30) Modal/_User.js => Modal/User.js ([97b8376](https://github.com/passoncomtw/todo-demo-api/commit/97b83760c3f101f9befea252586ba160f7498ae1))
* 🎸 [#33](https://github.com/passoncomtw/todo-demo-api/issues/33) 調整 user欄位 修復登入功能 ([992c8b2](https://github.com/passoncomtw/todo-demo-api/commit/992c8b249106f6eeda8e22d8f5f1cae4bbe52603))
* 🎸 initail project ([7623bfe](https://github.com/passoncomtw/todo-demo-api/commit/7623bfe00ffed82e53aece6ea89d2defc2ee68ed))
* 🎸[#53](https://github.com/passoncomtw/todo-demo-api/issues/53) 增加一個取回version 的 API ([6a30891](https://github.com/passoncomtw/todo-demo-api/commit/6a30891b1880da717803f8ed84a755b92460b6ad))
* **database:** 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 任務增加 使用者 ID 的 ref ([bd07338](https://github.com/passoncomtw/todo-demo-api/commit/bd073389c886c7bc2c51e4f1c204d4b480b87e9b))
* **database:** 🎸 [#25](https://github.com/passoncomtw/todo-demo-api/issues/25) 任務增加 使用者 ID 的 ref ([d78baa1](https://github.com/passoncomtw/todo-demo-api/commit/d78baa1af623ac00ef72328d95d18ef64950897c))


* feat🎸(database): #4  調整 migration 設定與 Task model ([fdb4b0c](https://github.com/passoncomtw/todo-demo-api/commit/fdb4b0c15d45e7322ed718f31cb40c4faf66e19b)), closes [#4](https://github.com/passoncomtw/todo-demo-api/issues/4)
* feat🎸(database): #4  調整 migration 設定與 Task model ([c07722d](https://github.com/passoncomtw/todo-demo-api/commit/c07722ddaa4073b6f703112d5a14779fa8cbc726)), closes [#4](https://github.com/passoncomtw/todo-demo-api/issues/4)
