export function startHeroTyping() {
  const title = document.querySelector('#hero-title[data-title-lines]');
  if (!title) {
    return;
  }

  if (title._typingTimeout) {
    window.clearTimeout(title._typingTimeout);
  }

  title._typingRunId = (title._typingRunId || 0) + 1;
  const currentRunId = title._typingRunId;

  let lines;
  try {
    lines = JSON.parse(title.getAttribute('data-title-lines') || '[]');
  } catch {
    lines = [];
  }

  if (!Array.isArray(lines) || lines.length === 0) {
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;

  const schedule = (callback, delay) => {
    title._typingTimeout = window.setTimeout(() => {
      if (title._typingRunId !== currentRunId) {
        return;
      }
      callback();
    }, delay);
  };

  const resetTyping = () => {
    title.innerHTML = '';
    lineIndex = 0;
    charIndex = 0;
  };

  const typeNext = () => {
    if (lineIndex >= lines.length) {
      schedule(() => {
        resetTyping();
        typeNext();
      }, 1600);
      return;
    }

    const currentLine = lines[lineIndex];
    charIndex += 1;

    const completedLines = lines.slice(0, lineIndex).join('<br>');
    const activeLine = currentLine.slice(0, charIndex);
    title.innerHTML = completedLines
      ? `${completedLines}<br>${activeLine}`
      : activeLine;

    if (charIndex < currentLine.length) {
      schedule(typeNext, 85);
      return;
    }

    lineIndex += 1;
    charIndex = 0;
    schedule(typeNext, 220);
  };

  title.classList.add('typing-active');
  resetTyping();
  schedule(typeNext, 280);
}
