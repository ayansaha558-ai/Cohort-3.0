import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        solve(arr, n);
    }

    static void solve(int[] arr, int n) {

        int max = Integer.MIN_VALUE;
        int sec_max = Integer.MIN_VALUE;

        for(int ele : arr) {

            if(ele > max) {
                sec_max = max;
                max = ele;
            }
            else if(ele > sec_max && ele != max) {
                sec_max = ele;
            }
        }

        System.out.println("Second greatest element = " + sec_max);
    }
}