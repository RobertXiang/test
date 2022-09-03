/*
 Navicat Premium Data Transfer

 Source Server         : yuanfan
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : myzx

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 04/09/2022 02:07:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员ID ，主键自增',
  `uname` varchar(64) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL COMMENT '账号',
  `password` varchar(32) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL COMMENT '密码',
  `nickname` varchar(64) CHARACTER SET armscii8 COLLATE armscii8_general_ci NOT NULL COMMENT '昵称',
  PRIMARY KEY (`aid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123456', 'Ashin');
INSERT INTO `admin` VALUES (2, 'yuanfan', '123456', 'yf');
INSERT INTO `admin` VALUES (3, 'luoyingxiang', '123456', 'dlz');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id 自增 主键',
  `uname` varchar(32) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `upwd` varchar(32) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '用户密码',
  `avator` varchar(128) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT 'http://www.zlllcy.com/img/avatar/top.jpg' COMMENT '头像',
  `email` varchar(64) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(11) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `sex` char(255) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `add` varchar(128) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '地址',
  `id_card` varchar(18) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `state` char(1) CHARACTER SET armscii8 COLLATE armscii8_general_ci NULL DEFAULT NULL COMMENT '用户状态',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = armscii8 COLLATE = armscii8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'zhangsan', '123455', 'null', '731099831@qq.com', '13628101692', '1', 'null', '51062310002121', '0');

SET FOREIGN_KEY_CHECKS = 1;
