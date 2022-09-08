<template>
  <div>
    <!-- testing/Field.vue -->
    <mt-field state="success"
        label="账号" placeholder="请输入账号"></mt-field>
    <mt-field state="warning"
        label="密码" type="password" placeholder="请输入密码"></mt-field>
    <mt-field state="error"
        :attr="{maxlength:'11', a:'a', b:'b', c:'1234'}"
        label="手机号" placeholder="请输入手机号"
        maxlength="11" disableClear></mt-field>
  </div>
</template>
