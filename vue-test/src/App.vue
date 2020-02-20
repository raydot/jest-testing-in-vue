<template>
  <div id="app">
    <MessageList :message="messages" />
  </div>
</template>

<script>
import MessageList from "./components/MessageList";
export default {
  name: "app",
  data: () => ({ messages: ["Hello", "What's up?"] }),
  components: {
    MessageList
  }
};
</script>
