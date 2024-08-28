        // 페이지가 로드될 때 저장된 파일을 불러와서 이미지와 오디오를 설정
        window.onload = function () {
            const imageFile = sessionStorage.getItem('imageFile');
            const audioFile = sessionStorage.getItem('audioFile');

            if (imageFile) {
                document.getElementById('uploadedImage').src = imageFile; // 저장된 이미지 URL로 이미지 설정
            }

            if (audioFile) {
                const audioElement = document.getElementById('bgMusic');
                audioElement.src = audioFile; // 저장된 오디오 URL로 오디오 설정
                audioElement.play(); // 오디오 재생
            }
        };