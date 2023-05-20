import { fetchEmployees } from '../components/api_functions.js';
import { goToEmployeePage } from '../components/helper_functions.js';

export default {
  data() {
    return {
      employees: [],
      };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    goToEmployeePage
  },
  async mounted() {
    this.employees = await fetchEmployees();
  }
}

