/**
 * 游戏管理器
 */
function GameManager() {
  // 初始化游戏状态
  this.resetState();
  
  // 获取DOM元素
  this.cacheDOMElements();
  
  // 绑定事件处理函数
  this.bindEvents();
  
  // 尝试从本地存储加载游戏状态
  this.loadGameState();
}

// ------------------ 状态管理方法 ------------------
GameManager.prototype.resetState = function() {
  this.targetNumber = null;
  this.attempts = 0;
  this.currentRange = 100;
  this.level = 1;
  this.gameActive = false;
};

GameManager.prototype.cacheDOMElements = function() {
  this.guessInput = document.querySelector('.field');
  this.guessButton = document.querySelector('.start');
  this.message = document.querySelector('.game-message');
  this.attemptsDisplay = document.querySelector('.tryfrequency');
  this.rangeDisplay = document.querySelector('.range-display');
};

GameManager.prototype.bindEvents = function() {
  // 使用箭头函数避免绑定this
  this.handleGuess = () => this.checkGuess();
  this.handleKeyPress = (e) => {
    if (e.key === 'Enter') this.checkGuess();
  };
  
  this.guessButton.addEventListener('click', this.handleGuess);
  this.guessInput.addEventListener('keypress', this.handleKeyPress);
};

// ------------------ 游戏存储方法 ------------------
GameManager.prototype.saveGameState = function() {
  const gameState = {
    targetNumber: this.targetNumber,
    attempts: this.attempts,
    currentRange: this.currentRange,
    level: this.level,
    gameActive: this.gameActive
  };
  
  try {
    localStorage.setItem('guessnumGameState', JSON.stringify(gameState));
  } catch (e) {
    console.error('保存游戏状态失败:', e);
    mdui.snackbar('保存游戏进度失败，请确保浏览器支持本地存储');
  }
};

GameManager.prototype.loadGameState = function() {
  const savedState = localStorage.getItem('guessnumGameState');
  
  if (!savedState) {
    this.showWelcomeDialog();
    return;
  }
  
  try {
    const gameState = JSON.parse(savedState);
    
    // 验证加载的状态是否有效
    if (!this.validateGameState(gameState)) {
      throw new Error('无效的游戏状态');
    }
    
    this.showResumeDialog(gameState);
  } catch (e) {
    console.error('加载游戏状态失败:', e);
    this.showCorruptedDataDialog();
  }
};

GameManager.prototype.validateGameState = function(state) {
  return state && 
    typeof state.currentRange === 'number' && 
    typeof state.level === 'number' &&
    (state.targetNumber === null || 
     (typeof state.targetNumber === 'number' && 
      state.targetNumber >= 1 && 
      state.targetNumber <= state.currentRange));
};

// ------------------ 对话框方法 ------------------
GameManager.prototype.showWelcomeDialog = function() {
  mdui.dialog({
    headline: '欢迎来到数字猜谜游戏!',
    description: '猜一个1-100之间的数字开始游戏。',
    actions: [{
      text: "开始游戏",
      onClick: () => this.initNewGame()
    }]
  });
};

GameManager.prototype.showResumeDialog = function(gameState) {
  mdui.dialog({
    headline: `检测到第${gameState.level}关存档`,
    description: `范围: 1-${gameState.currentRange}`,
    actions: [
      {
        text: "恢复游戏",
        onClick: () => {
          Object.assign(this, gameState);
          this.startGame();
        }
      },
      {
        text: "重新开始",
        onClick: () => {
          localStorage.removeItem('guessnumGameState');
          this.initNewGame();
        }
      }
    ]
  });
};

GameManager.prototype.showCorruptedDataDialog = function() {
  mdui.dialog({
    headline: '存档数据损坏',
    description: '无法加载之前的游戏进度，将开始新游戏。',
    actions: [{
      text: "确定",
      onClick: () => {
        localStorage.removeItem('guessnumGameState');
        this.initNewGame();
      }
    }]
  });
};

// ------------------ 游戏逻辑方法 ------------------
GameManager.prototype.initNewGame = function() {
  this.resetState();
  this.startGame();
};

GameManager.prototype.startGame = function() {
  if (!this.targetNumber) {
    this.generateNewTarget();
  }
  
  this.gameActive = true;
  this.updateUI();
  this.guessInput.value = '';
  this.guessInput.disabled = false;
  this.guessInput.focus();
  this.saveGameState();
};

GameManager.prototype.generateNewTarget = function() {
  this.targetNumber = Math.floor(Math.random() * this.currentRange) + 1;
};

GameManager.prototype.updateUI = function() {
  this.attemptsDisplay.textContent = `尝试次数: ${this.attempts}`;
  this.rangeDisplay.textContent = `1-${this.currentRange}`;
  this.message.textContent = '';
};

GameManager.prototype.checkGuess = function() {
  if (!this.gameActive) return;
  
  const userGuess = parseInt(this.guessInput.value);
  
  if (!this.validateGuess(userGuess)) {
    this.showInvalidInputMessage();
    return;
  }
  
  this.processGuess(userGuess);
};

GameManager.prototype.validateGuess = function(guess) {
  return !isNaN(guess) && 
         guess >= 1 && 
         guess <= this.currentRange;
};

GameManager.prototype.showInvalidInputMessage = function() {
  this.message.textContent = `请输入1到${this.currentRange}之间的有效数字！`;
  this.message.style.color = '#f44336';
  this.guessInput.value = '';
  this.guessInput.focus();
};

GameManager.prototype.processGuess = function(userGuess) {
  this.attempts++;
  this.updateUI();
  
  if (userGuess === this.targetNumber) {
    this.handleCorrectGuess();
  } else {
    this.handleIncorrectGuess(userGuess);
  }
  
  this.saveGameState();
};

GameManager.prototype.handleCorrectGuess = function() {
  this.message.textContent = `恭喜！数字就是 ${this.targetNumber}。`;
  this.message.style.color = '#4CAF50';
  this.guessInput.disabled = true;
  this.gameActive = false;
  
  mdui.dialog({
    headline: `第${this.level}关通过！`,
    description: `用了 ${this.attempts} 次尝试。`,
    actions: [
      {
        text: "下一关",
        onClick: () => {
          this.currentRange *= 10;
          this.level++;
          this.targetNumber = null;
          this.startGame();
        }
      },
      {
        text: "重新开始",
        onClick: () => {
          localStorage.removeItem('guessnumGameState');
          this.initNewGame();
        }
      }
    ]
  });
};

GameManager.prototype.handleIncorrectGuess = function(userGuess) {
  if (userGuess < this.targetNumber) {
    this.message.textContent = '太小了，再大一点！';
    this.message.style.color = '#2196F3';
  } else {
    this.message.textContent = '太大了，再小一点！';
    this.message.style.color = '#FF9800';
  }
  
  this.guessInput.value = '';
  this.guessInput.focus();
};

// ------------------ 清理方法 ------------------
GameManager.prototype.destroy = function() {
  // 移除事件监听器
  this.guessButton.removeEventListener('click', this.handleGuess);
  this.guessInput.removeEventListener('keypress', this.handleKeyPress);
  
  // 清除引用
  this.guessInput = null;
  this.guessButton = null;
  this.message = null;
  this.attemptsDisplay = null;
  this.rangeDisplay = null;
};

// ------------------ 游戏初始化 ------------------
let gameInstance = null;

function initializeGame() {
  // 清理现有实例
  if (gameInstance) {
    gameInstance.destroy();
  }
  
  // 创建新实例
  gameInstance = new GameManager();
}

// 使用DOMContentLoaded确保DOM已加载
document.addEventListener('DOMContentLoaded', initializeGame);

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
  if (gameInstance) {
    gameInstance.destroy();
    gameInstance = null;
  }
});
