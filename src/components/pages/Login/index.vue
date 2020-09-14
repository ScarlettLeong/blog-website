<template>
  <div class="p-login">
    <div class="u-login">
      <h1>登录</h1>
      <el-form ref="form" :model="form" class="login-form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="_login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { login } from "../../../api/login";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    _login() {
      try {
        login({
          username: this.form.username,
          password: this.form.password,
        })
          .then((res) => {
            if (res.data.errno !== 0) {
              throw new Error(res.message);
            }
            this.setUserName(this.form.username);
            this.setIsLogin(true);
            this.$router.push({
              path: "/blog/list",
            });
          })
          .catch((e) => {
            this.$message.error(e.message);
          });
      } catch (e) {
        this.$message.error(e.toString());
      }
    },
    ...mapMutations({
      // 方法映射
      setUserName: "SET_USERNAME",
      setIsLogin: "SET_IS_LOGIN",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.p-login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.u-login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35%;
}
h1 {
  margin: 0 0 10px 0;
}
.login-form {
  width: 400px;
}
.login-btn {
  width: 100%;
}
</style>
