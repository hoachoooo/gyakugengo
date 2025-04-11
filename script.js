const words = [
  "ボトルキープ2ヶ月です",
  "ニャンだか幸せ一期一会",
  "老人ホーム",
  "パリパリウィンナー",
  "お会計はテーブルにてお願いします",
  "ウォシュレット故障中",
  "ハイヒールリンゴ",
  "岡本コンドーム0.01",
  "ミニクーパー春菜",
  "キャンドルジュン"
];

function generateWord() {
  const random = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").textContent = random;

  const tweetText = encodeURIComponent(`「${random}」 #逆言葉ジェネレーター`);
  document.getElementById("shareBtn").href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}
