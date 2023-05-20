import router from "@/router";

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
    fetchEmployees() {
      const apiUrl = 'http://localhost:3001/employees';

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.employees = data;
          console.log(this.employees)
        })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
        });
    },
    showPopup(employee) {
      employee.showPopup = true;
    },
    hidePopup(employee) {
      employee.showPopup = false;
    },
    findEmployeeById(id) {
      return this.employees.find(employee => employee.id === id);
    },
    goToemployeePage(id) {
      router.push("/employees/" + id)
    }
  }
}

