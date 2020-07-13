<template>
  <div class="home">
    <img src="../assets/img/geralt.png" alt="Geralt of Rivia" />
    <section>
      <h2>Geralt of Rivia</h2>
      <hr />
      <p>
        Geralt of Rivia was a legendary witcher of the School of the Wolf active
        throughout the 13th century. He loved the sorceress Yennefer, considered
        the love of his life despite their tumultuous relationship, and became
        Ciri's adoptive father.
      </p>
      <h3>Master Swordsman</h3>
      <p>
        Years of training in Kaer Morhen have turned Geralt into a killing
        machine and a danger both to humans and monsters. Geralt's weapons of
        choice are two swords: one for humans, and another for monsters.
      </p>
      <h3>Witcher senses</h3>
      <p>
        As a witcher, Geralt's senses are much more enhanced compared to normal
        humans, making it much easier for him to track down and hunt prey.
      </p>
      <h3>Magic powers</h3>
      <p>
        Geralt also has a range of effective, albeit limited, spells and signs
        that he can use to subdue enemies. <br />
        <strong>Igni</strong> allows Geralt to light enemies on fire,<br />
        <strong>Quen</strong> casts a protective but breakable shield around
        Geralt,<br />
        <strong>Axii</strong> allows Geralt to charm opponents and manipulate
        them into becoming docile or divulge information,<br />
        <strong>Yrden</strong> allows Geralt to create a magical trap which can
        incapacitate monsters, and<br />
        <strong>Aard</strong> allows Geralt to telekinetically blast enemies,
        stunning them or knocking them back.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../styles/fonts.scss";
@import "../styles/variables.scss";

.home {
  color: $primary-foreground;
  text-align: center;
  overflow-y: auto;

  img {
    max-width: 100%;
    max-height: 740px;
    height: auto;
    margin: 0;

    @media only screen and (max-width: $grid-md) {
      margin-top: 70px;
    }
  }

  section {
    display: inline-block;
    max-width: 500px;
    padding: 0 30px;

    h2,
    h3 {
      font-family: wfont, josefinMedium, sans-serif;
    }
    h3 {
      display: flex;
      align-items: center;
      text-align: center;

      &::before {
        content: "";
        flex: 1;
        border-bottom: 1px solid $primary-foreground;
        margin-right: 0.25em;
      }
      &::after {
        content: "";
        flex: 1;
        border-bottom: 1px solid $primary-foreground;
        margin-left: 0.25em;
      }
    }

    h2 {
      font-size: 36px;
      margin-top: 50px;
    }
    p {
      font-size: 18px;
      text-align: left;
      font-family: josefinMedium, sans-serif;

      strong {
        font-size: 20px;
        font-family: wfont, josefinMedium, sans-serif;
        text-transform: capitalize;
      }
    }
  }
}
</style>
