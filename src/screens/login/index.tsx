/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 孙日发
 * @Date: 2021-06-21 21:45:51
 * @LastEditors: 孙日发
 * @LastEditTime: 2021-06-21 21:45:52
 */

import React, { FormEvent } from "react";
const baseUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = function () {
  const login = (param: { username: string; password: string }) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(param),
    }).then(async (response: Response) => {
      if (response.ok) {
      }
    });
  };

  const handlerEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handlerEvent}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
