
import { reactive } from "vue";
import {name, dob} from "./options.json";
export default reactive({
    url: "/ReclaimPPI/lead",
    step: 1,
    loading: false,
    steps: [
        {title: "Criteria", number: 1 },
        {title: "PPI Claim Details", number: 2 },
        {title: "PPI Claim Details", number: 3 },
        {title: "About You", number: 4 },
        {title: "Contact Details", number: 5 },
        {title: "Start Claim", number: 6 },
    ],
    form: [
      {
        self_assessment: null
      },
      {
        amount: null,
        years: [],
      },
      {

        less_earning: null,
        ni_number: null,
        cant_remember: null,
      },
      {
        ...name,
        ...dob,
      },
      {
        email: null,
        phone: null,
        address: null,
        postcode: null,
        agree: null,
      },
      {
        referral_code: null,
        signature: null,
      },
    ],

  });
