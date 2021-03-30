let royAndProfilePicture = (L, T, Arr) => {
  for (let i = 0; i < T; i++) {
    if (Arr[i][0] < L || Arr[i][1] < L) {
      console.log("UPLOAD ANOTHER");
    } else {
      if (Arr[i][0] === L && Arr[i][1] === L) {
        console.log("ACCEPTED");
      } else {
        console.log("CROP IT");
      }
    }
  }
};

royAndProfilePicture(180, 5, [
  [640, 480],
  [120, 300],
  [180, 180],
  [400, 400],
  [200, 180],
]);

/*

L = int(input())
N = int(input())
for i in range(0,N):
a = list(map(int,input().split()))
if a[0]<L:
print("UPLOAD ANOTHER")
elif a[1]<L:
print("UPLOAD ANOTHER")
elif (a[0]==a[1]):
print("ACCEPTED")
else:
print("CROP IT")

*/
