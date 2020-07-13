<template>
  <div class="contact">
    <h1>Contact a witcher</h1>
    <br />
    <form id="newproductform" @submit.prevent="submitMessage($event)">
      <h4>Send a message</h4>
      <p>
        <label for="email">Your e-mail: </label>
        <input autocomplete="off" type="text" name="email" id="email" />
      </p>

      <p>
        <label for="message">Message: </label>
        <textarea
          type="text"
          spellcheck="false"
          rows="15"
          name="messsage"
          id="message"
        ></textarea>
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Contact",
  data: () => {
    return {};
  },
  methods: {
    submitMessage(e) {
      Vue.axios
        .post(`/api/contact`, {
          email: e.target.elements.email.value,
          message: e.target.elements.message.value
        })
        .then(
          res => {
            Vue.toasted.success(res.data);
          },
          error => {
            if (error.response && error.response.status === 422) {
              error.response.data.errors.forEach(error => {
                Vue.toasted.error(error.msg);
              });
            } else {
              Vue.toasted.error("Something went wrong...");
            }
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/fonts.scss";

.contact {
  max-width: 600px;
  color: $primary-foreground;
  margin: 0 auto;
  padding: 20px;
  font-family: josefinMedium, sans-serif;

  h1 {
    font-family: wfont, josefinMedium, sans-serif;
  }

  input[type="text"],
  textarea {
    font-family: inherit;
    font-size: 18px;
    width: 100%;
    padding: 12px;
    color: $primary-foreground;
    background-color: $background-2;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  textarea {
    background-image: url("../assets/img/witcherEmblem.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 200px;
  }

  input[type="submit"] {
    background-color: $gray-1;
    color: $dark-gray-1;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: $gray-2;
    }
  }
}
</style>
