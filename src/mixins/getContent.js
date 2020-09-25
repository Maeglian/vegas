import axios from 'axios';
import Loader from '@/components/Loader.vue';

export default {
  props: {
    url: {
      type: String,
    },
  },
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
      isError: false,
      pageContent: '',
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    async getContent() {
      this.isLoading = true;
      try {
        const res = await axios.get(this.url);
        this.pageContent = res.data;
      } catch (e) {
        this.isErrored = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
