<template>
  <div class="login-container">
    <div class="create">
      Создать учетную запись
    </div>
    <custom-input type="text" placeholder="Login" />
    <custom-input type="password" placeholder="Password" />
    <div class="agreement">
      <agreement-icon/>
      <span class="agreement-text">
          Нажимая на кнопку “Регистрация” , вы принимаете условия пользовательского соглашения
        </span>
    </div>
    <div>
      <button class="button"> Регистрация </button>
    </div>
    <div class="account">
      Уже есть аккаунт?
      <a href="URL" class="source">
        Авторизоваться
      </a>
    </div>
  </div>
</template>

<script>
import AgreementIcon from '@/pages/login/AgreementIcon';

export default {
  name: 'LoginAttributes',
  components: {
    AgreementIcon
  },
}
</script>

<style lang="sass" scoped>


.login-container
  margin-top: 110px
  width: 380px
  background: #FFFFFF
  display: grid
  grid-template-rows: 60px 50px 50px 70px 50px 40px 800px
  grid-template-columns: 100%
  grid-gap: 20px

.create
  display: flex
  justify-content: center
  align-items: center
  color: #000000
  font-style: normal
  font-weight: bold
  font-size: 14px
  line-height: 17px
  text-transform: uppercase

.agreement
  display: flex
  align-items: flex-start
  justify-content: space-between

  .agreement-text
    margin-left: 10px
    color: #000000
    line-height: 17px

.button
  width: 100%
  height: 100%
  outline: none
  background: #000000
  border-radius: 10px
  font-weight: bold
  line-height: 17px
  color:  #FFFFFF
  text-transform: capitalize

.account
  margin-top: -10px
  display: flex
  flex-direction: column
  line-height: 17px

.source
  &:link
    color: #000000
</style>