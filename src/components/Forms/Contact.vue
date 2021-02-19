<template>
  <div class="contact">
    <h1 class="text-center f-24 f-md-40 mb-4">How can we contact you?</h1>

    <div class="content">
      <form class="contact-form">
        <p class="mb-2 label">Full name</p>
        <v-text-field
          class="form-group"
          :validations="$v.name"
          single-line
          outlined
          required
          label="Full name"
          hide-details
          :error-messages="nameErrors"
          v-model="name"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <p class="mb-2 label">State</p>
        <v-select
          class="form-group"
          single-line
          outlined
          required
          label="State"
          hide-details
          :error-messages="stateErrors"
          :items="items"
          v-model="state"
          @change="$v.state.$touch()"
          @blur="$v.state.$touch()"
        ></v-select>

        <p class="mb-2 label">Phone Number</p>
        <v-text-field
          class="form-group"
          single-line
          outlined
          required
          label="Phone number"
          hide-details
          :error-messages="phoneErrors"
          v-model="phone"
          @input="$v.phone.$touch()"
          @blur="$v.phone.$touch()"
        ></v-text-field>

        <p class="mb-2 label">E-mail</p>
        <v-text-field
          class="form-group"
          single-line
          outlined
          required
          label="E-mail"
          hide-details
          :error-messages="emailErrors"
          v-model="email"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>

        <Button
          :disabled="$v.$invalid"
          text="Submit"
          styles="my-6 btn-dark w-100"
          xlarge
          @click="handleSubmit"
        />
      </form>

      <v-snackbar v-model="snackbar" :color="snackbarType">
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn icon @click="snackbar = false" v-bind="attrs">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, helpers } from 'vuelidate/lib/validators';

import Button from '../common/Button';

const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const phone = helpers.regex('phone', phoneReg);

export default {
  name: 'Contact',
  components: {
    Button
  },
  data: () => ({
    name: '',
    state: '',
    phone: '',
    email: '',
    disabled: true,
    snackbar: false,
    snackbarType: 'primary',
    snackbarText: '',
    items: [
      'AL',
      'AK',
      'AS',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'DC',
      'FM',
      'FL',
      'GA',
      'GU',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MH',
      'MD',
      'MA',
      'MI',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'MP',
      'OH',
      'OK',
      'OR',
      'PW',
      'PA',
      'PR',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VI',
      'VA',
      'WA',
      'WV',
      'WI',
      'WY'
    ]
  }),
  mixins: [validationMixin],
  validations: {
    name: { required },
    state: { required },
    phone: { required, phone },
    email: { required, email }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('Full name is required.');
      return errors;
    },
    stateErrors() {
      const errors = [];
      if (!this.$v.state.$dirty) return errors;
      !this.$v.state.required && errors.push('State is required');
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (!this.$v.phone.$dirty) return errors;
      !this.$v.phone.required && errors.push('Phone number is required');
      !this.$v.phone.phone && errors.push('Must be valid phone number');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push('E-mail is required');
      !this.$v.email.email && errors.push('Must be valid e-mail');
      return errors;
    }
  },

  methods: {
    handleSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.snackbar = true;
        this.snackbarType = 'error';
        this.snackbarText = 'Please check errors and try again!';
      } else {
        const user = {
          name: this.name,
          state: this.state,
          phone: this.phone,
          email: this.email
        };

        console.log({ user });

        this.snackbar = true;
        this.snackbarType = 'primary';
        this.snackbarText = 'Submitted successfully!';
      }
    }
  }
};
</script>

<style>
@media (min-width: 600px) {
  .contact .content {
    width: 24rem;
    margin: 0 auto;
  }
}

.contact-form .label {
  color: var(--v-gray-base);
}

.contact-form .form-group {
  margin-bottom: 20px;
}
</style>
