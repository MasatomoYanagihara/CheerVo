<template>
  <div>
    <div class="btn">
      <v-btn type="button" v-if="status == 'ready'" @click="startRecording">
        録音を開始する
      </v-btn>
      <v-btn type="button" v-if="status == 'recording'" @click="stopRecording">
        録音を終了する
      </v-btn>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      status: "init", // 状況（init:ページ読み込んだ時, ready:録音ができる状態, recording:録音中）
      recorder: null, // 音声にアクセスする "MediaRecorder" のインスタンス
      audioData: [], // 入力された音声データ
      audioExtension: "", // 音声ファイルの拡張子
    };
  },
  methods: {
    // 録音開始メソッド
    startRecording() {
      this.status = "recording";
      this.audioData = [];
      this.recorder.start();
    },
    // 録音終了メソッド
    stopRecording() {
      this.recorder.stop();
      this.status = "ready";
    },
    // 音声ファイルの拡張子取得メソッド
    getExtension(audioType) {
      let extension = "wav";
      const matches = audioType.match(/audio\/([^;]+)/);

      if (matches) {
        extension = matches[1];
      }

      return "." + extension;
    },
  },
  mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.recorder = new MediaRecorder(stream);
      this.recorder.addEventListener("dataavailable", (e) => {
        this.audioData.push(e.data);
        this.audioExtension = this.getExtension(e.data.type);
        console.log("audioExtension: " + this.audioExtension);
      });
      this.recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(this.audioData);
        const url = URL.createObjectURL(audioBlob);

        console.log(this.audioData);
      });
      this.status = "ready";
    });
  },
};
</script>

<style>
.btn {
  margin-top: 100px;
}
</style>